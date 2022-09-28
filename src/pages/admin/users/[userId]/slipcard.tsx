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
import SlipCard from "lib/components/Utils/UsersTab/SlipCard";

function UserSlipCard({
  allUsers,
  userId,
  singleUser,
}: {
  allUsers: any;
  userId: number;
  singleUser: any;
}) {
  const [currentTab, setCurrentTab] = useState("slipcard");
  const router = useRouter();

  const result = allUsers.value;
  const userProfile = singleUser.data;
  console.log({ allUsers, userProfile });
  const navigateTabs = (tabname: string) => {
    router.push({
      pathname: `/admin/users/${userProfile.id}/${tabname}`,
      query: { ...router.query },
    });
  };

  return (
    <>
      <HStack spacing="1rem" h="auto" alignItems="flex-start">
        <Box w="20%">
          <Box bgColor="white" h="90vh" position="relative">
            <SearchComponent border={false} />
            {result.map((user: UserView, i: number) => {
              return (
                <Box
                  onClick={() => {
                    router.push({
                      pathname: `/admin/users/${user.id}/profile`,
                      query: { ...router.query },
                    });
                  }}
                >
                  <Flex
                    borderTop="1px solid rgba(36,68,115,0.3)"
                    h="40px"
                    role="group"
                    cursor="pointer"
                    alignItems="center"
                    transition="all .2s ease"
                    _hover={{ bgColor: "brand.100" }}
                    bgColor={user.id == userId ? "brand.100" : "unset"}
                  >
                    <Text
                      color={user.id == userId ? "white" : "black"}
                      fontSize="14px"
                      textTransform="capitalize"
                      fontWeight="600"
                      pl="1.2rem"
                      _groupHover={{ color: "white" }}
                    >
                      {user.fullName}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
            <Box mt="0rem" pos="absolute" bottom="0">
              <Pagination data={allUsers} display="none" justify="center" />
            </Box>
          </Box>
        </Box>
        <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
          <Flex alignItems="center" fontWeight="bold">
            <Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
              {`${userProfile.firstName?.charAt(
                0
              )}${userProfile.lastName?.charAt(0)}`}
            </Circle>
            <Box>
              <Text fontSize="1.5rem">{userProfile.fullName}</Text>
            </Box>
          </Flex>
          <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
            <Box onClick={() => navigateTabs("profile")}>
              <Tab tabname="profile" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("transactions")}>
              <Tab tabname="transactions" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("savings")}>
              <Tab tabname="savings" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("loans")}>
              <Tab tabname="loans" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("investments")}>
              <Tab tabname="investments" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("payments")}>
              <Tab tabname="payments" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("slipcard")}>
              <Tab tabname="slipcard" currentTab={currentTab} />
            </Box>
            <Box onClick={() => navigateTabs("security")}>
              <Tab tabname="security" currentTab={currentTab} />
            </Box>
          </Flex>
          {/* <h1>No page Added</h1> */}
          <SlipCard />
        </Box>
      </HStack>
    </>
  );
}
export default withAuth(UserSlipCard);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    ctx.query.limit = 15;
    const pagingOptions = filterPagingSearchOptions(ctx);
    const userId = ctx.query.userId;

    try {
      const allUsers = (
        await UserService.listUsers(pagingOptions.offset, pagingOptions.limit)
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
