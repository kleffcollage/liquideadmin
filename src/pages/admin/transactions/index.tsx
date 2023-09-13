import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import AdminTransaction from "lib/components/Utilities/AdminTransaction";
import withAuth from "lib/components/Utilities/Auth";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { GetServerSideProps } from "next";
import React from "react";
import {
  AdminService,
  TransactionViewPagedCollectionStandardResponse,
} from "services";

function transactions({
  data,
}: {
  data: TransactionViewPagedCollectionStandardResponse;
}) {
  console.log({ data });
  return <AdminTransaction data={data} />;
}

export default withAuth(transactions);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    const pagingOptions = filterPagingSearchOptions(ctx);
    try {
      const data = (await AdminService.listTransactionsAdmin(
        pagingOptions.offset,
        pagingOptions.limit
      )) as TransactionViewPagedCollectionStandardResponse;
      return {
        props: {
          data: data,
        },
      };
    } catch (error: any) {
      console.log(error);
      return {
        props: {
          data: [],
        },
      };
    }
  }
);
