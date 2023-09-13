import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { DataAccess } from "lib/Utils/Api";
import {
  AdminService,
  UserService,
  UserViewPagedCollectionStandardResponse,
} from "services";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";

export default function ServiceIndex() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    const { id } = ctx.query;
    console.log({ id });
    const pagingOptions = filterPagingSearchOptions(ctx);

    let users;
    let pageData;
    try {
      const data = await AdminService.listServices();
      // console.log({ data });
      pageData = data.data;
    } catch (error) {}

    if (!id) {
      //@ts-ignore
      const firstUser = pageData[0];
      return {
        redirect: {
          permanent: false,
          destination: `/admin/services/${firstUser.id}`,
        },
      };
    }

    try {
      return {
        props: {
          pageData,
        },
      };
    } catch (error) {
      return {
        props: {
          data: [],
        },
      };
    }
  }
);
