import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { DataAccess } from "lib/Utils/Api";
import {
  AdminService,
  UserViewPagedCollectionStandardResponse,
} from "services";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";

export default function UserIndex() {
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
      const data = (await AdminService.listAdmins(
        pagingOptions.offset,
        pagingOptions.limit
      )) as UserViewPagedCollectionStandardResponse;
      users = data.data?.value;
      pageData = data.data;
    } catch (error) {}

    if (!id) {
      //@ts-ignore
      const firstUser = users[0];
      return {
        redirect: {
          permanent: false,
          destination: `/admin/settings/admins/${firstUser.id}/profile`,
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
