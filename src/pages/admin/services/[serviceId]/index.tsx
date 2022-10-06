import Services from "lib/components/Utils/Services";
import { Box, Circle, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  AdminService,
  UserService,
  UserView,
  UserViewPagedCollectionStandardResponse,
} from "Services";
import { useRouter } from "next/router";
import Tab from "lib/components/Utilities/Tab";
import Profile from "lib/components/Utils/UsersTab/Profile";
import Pagination from "lib/components/Utilities/Pagination";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import SearchComponent from "lib/components/Utilities/SearchComponent";
import withAuth from "lib/components/Utilities/Auth";
import UserPagination from "lib/components/Utils/UserPagination";

function ServicesDetails({
  allServices,
  serviceId,
  singleService,
}: {
  allServices: any;
  serviceId: number;
  singleService: any;
}) {
  const router = useRouter();

  const result = allServices.value;
  const [checked, setChecked] = useState<boolean>(
    singleService?.data.isActive || false
  );
  console.log({ checked }, { singleService: singleService.data.isActive });
  return (
    <Services
      result={result}
      serviceId={serviceId}
      singleService={singleService}
      allServices={allServices}
      setChecked={setChecked}
      checked={checked}
    />
  );
}

export default withAuth(ServicesDetails);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    ctx.query.limit = 15;
    const pagingOptions = filterPagingSearchOptions(ctx);
    const serviceId = ctx.query.serviceId;

    try {
      const allServices = (
        await UserService.listUsers(pagingOptions.offset, pagingOptions.limit)
      ).data as UserViewPagedCollectionStandardResponse;
      const singleService = (await AdminService.getUserById(
        serviceId
      )) as UserViewPagedCollectionStandardResponse;

      return {
        props: {
          allServices,
          serviceId,
          singleService,
        },
      };
    } catch (error) {
      return {
        props: {
          allUsers: [],
        },
      };
    }
  }
);
