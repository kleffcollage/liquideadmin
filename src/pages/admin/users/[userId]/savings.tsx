import { Box, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  AdminService,
  TransactionViewPagedCollectionStandardResponse,
  UserService,
  UserViewPagedCollectionStandardResponse,
} from "services";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import withAuth from "lib/components/Utilities/Auth";
import Transactions from "lib/components/Utils/UsersTab/Transactions";
import UserSideBar from "lib/components/Utilities/UserSideBar";
import UserContent from "lib/components/Utilities/UserContent";
import Savings from "lib/components/Utils/UsersTab/Savings";

function userSavings({
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
  const [currentTab, setCurrentTab] = useState("savings");
  const result = allUsers?.value;
  const userProfile = singleUser?.data;

  return (
    <>
      <HStack spacing="1rem" h="auto" alignItems="flex-start">
        <UserSideBar allUsers={allUsers} userId={userId} result={result} />
        <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
          <UserContent userProfile={userProfile} currentTab={currentTab} />
          <Savings />
        </Box>
      </HStack>
    </>
  );
}

export default withAuth(userSavings);

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

      return {
        props: {
          allUsers,
          userId,
          singleUser,
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
