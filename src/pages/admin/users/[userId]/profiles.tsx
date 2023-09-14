import { Box, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import {
  AdminService,
  UserService,
  UserViewPagedCollectionStandardResponse,
} from "Services";
import { useRouter } from "next/router";
import Profile from "lib/components/Utils/UsersTab/Profile";
import { filterPagingSearchOptions } from "lib/components/Utilities/Functions/utils";
import { withPageAuthRequired } from "lib/components/hocs/withPageAuthRequired";
import withAuth from "lib/components/Utilities/Auth";
import UserSideBar from "lib/components/Utilities/UserSideBar";
import UserContent from "lib/components/Utilities/UserContent";

function UserPayment({
  allUsers,
  userId,
  singleUser,
}: {
  allUsers: any;
  userId: number;
  singleUser: any;
}) {
  const [currentTab, setCurrentTab] = useState("profiles");
  const router = useRouter();

  const result = allUsers?.value;
  const userProfile = singleUser?.data;
  const [checked, setChecked] = useState<boolean>(
    singleUser?.data.isActive || false
  );
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
          <Profile
            user={userProfile}
            checked={checked}
            setChecked={setChecked}
          />
        </Box>
      </HStack>
    </>
  );
}
export default withAuth(UserPayment);

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
