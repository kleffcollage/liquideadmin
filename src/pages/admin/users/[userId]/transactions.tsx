import { Box, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  AdminService,
  TransactionViewPagedCollectionStandardResponse,
  UserService,
  UserViewPagedCollectionStandardResponse,
} from "Services";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import withAuth from "lib/components/Utilities/Auth";
import Transactions from "lib/components/Utils/UsersTab/Transactions";
import UserSideBar from "lib/components/Utilities/UserSideBar";
import UserContent from "lib/components/Utilities/UserContent";

function UserProfile({
  allUsers,
  userId,
  singleUser,
  userTransaction,
}: {
  allUsers: any;
  userId: number;
  singleUser: any;
  userTransaction: TransactionViewPagedCollectionStandardResponse;
}) {
  const [currentTab, setCurrentTab] = useState("transactions");
  const result = allUsers?.value;
  const userProfile = singleUser?.data;

  return (
    <>
      <HStack spacing="1rem" h="auto" alignItems="flex-start">
        <UserSideBar allUsers={allUsers} userId={userId} result={result} />
        <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
          <UserContent userProfile={userProfile} currentTab={currentTab} />
          <Transactions transaction={userTransaction?.data} id={userId} />
        </Box>
      </HStack>
    </>
  );
}
export default withAuth(UserProfile);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    ctx.query.limit = 15;
    const pagingOptions = filterPagingSearchOptions(ctx);
    const userId = ctx.query.userId;

    try {
      const allUsers = (
        await UserService.listUsers(
          pagingOptions.offset,
          pagingOptions.limit,
          pagingOptions.search
        )
      ).data as UserViewPagedCollectionStandardResponse;
      const singleUser = (await AdminService.getUserById(
        userId
      )) as UserViewPagedCollectionStandardResponse;
      const userTransaction = (await AdminService.listUsersTransaction(
        userId
      )) as TransactionViewPagedCollectionStandardResponse;

      return {
        props: {
          allUsers,
          userId,
          singleUser,
          userTransaction,
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
