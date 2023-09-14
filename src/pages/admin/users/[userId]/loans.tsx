import { Box, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  AdminService,
  LoanViewPagedCollectionStandardResponse,
  UserService,
  UserViewPagedCollectionStandardResponse,
} from "Services";
import { useRouter } from "next/router";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import withAuth from "lib/components/Utilities/Auth";
import Loans from "lib/components/Utils/UsersTab/Loans";
import UserSideBar from "lib/components/Utilities/UserSideBar";
import UserContent from "lib/components/Utilities/UserContent";

function UserLoan({
  allUsers,
  userId,
  singleUser,
  getUserLoan,
}: {
  allUsers: any;
  userId: number;
  singleUser: any;
  getUserLoan: LoanViewPagedCollectionStandardResponse;
}) {
  const [currentTab, setCurrentTab] = useState("loans");
  const router = useRouter();

  const result = allUsers?.value;
  const userProfile = singleUser?.data;
  const navigateTabs = (tabname: string) => {
    router.push({
      pathname: `/admin/users/${userProfile.id}/${tabname}`,
      query: { ...router.query },
    });
  };

  return (
    <>
      <HStack spacing="1rem" h="auto" alignItems="flex-start">
        <UserSideBar allUsers={allUsers} userId={userId} result={result} />
        <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
          <UserContent userProfile={userProfile} currentTab={currentTab} />
          <Loans getUserLoan={getUserLoan?.data} id={userId} />
        </Box>
      </HStack>
    </>
  );
}

export default withAuth(UserLoan);

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
      const getUserLoan = await AdminService.getUserLoan(
        userId,
        pagingOptions.offset,
        5
      );

      return {
        props: {
          allUsers,
          userId,
          singleUser,
          getUserLoan,
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
