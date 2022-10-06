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
import AdminProfile from "lib/components/Utils/SettingsTab/AdminProfile";
import Permission from "lib/components/Utils/SettingsTab/Permission";
import UserPagination from "lib/components/Utils/UserPagination";
import AddNewAdmin from "lib/components/Modals/AddNewAdmin";

function UserPermissions({
  allUsers,
  userId,
  singleUser,
}: {
  allUsers: any;
  userId: number;
  singleUser: any;
}) {
  const [currentTab, setCurrentTab] = useState("permissions");
  const [topTab, setTopTab] = useState("admins");
  const router = useRouter();
  const [successOpen, setsuccessOpen] = useState(false);
  const openModal = () => {
    setsuccessOpen(true);
  };
  const closeModal = () => {
    setsuccessOpen(false);
  };

  const result = allUsers.value;
  const userProfile: UserView = singleUser?.data;
  const navigateTabs = (tabname: string) => {
    router.push({
      pathname: `/admin/settings/admins/${userProfile.id}/${tabname}`,
      query: { ...router.query },
    });
  };
  const navTabs = (tabname: string) => {
    router.push({
      pathname: `/admin/settings/${tabname}`,
    });
  };

  return (
    <>
      <Flex borderBottom="1px solid rgba(36,68,115,0.1)">
        <Box onClick={() => navTabs("fees")}>
          <Tab tabname="fees" currentTab={topTab} />
        </Box>
        <Box onClick={() => navTabs("admins")}>
          <Tab tabname="admins" currentTab={topTab} />
        </Box>
      </Flex>
      <Box w="100%" bgColor="white" p="1.5rem" minH="90vh">
        <HStack spacing="1rem" h="auto" alignItems="flex-start">
          <Box w="20%">
            <Box bgColor="white" h="90vh" position="relative">
              <SearchComponent border={false} />
              {result?.map((user: UserView, i: number) => {
                return (
                  <Box
                    onClick={() => {
                      router.push({
                        pathname: `/admin/settings/admins/${user.id}/profile`,
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
              <UserPagination allUsers={allUsers} />
            </Box>
          </Box>
          <Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
            <Box w="20%" onClick={openModal} ml="auto">
              <Flex
                as="button"
                w="full"
                h="2.3rem"
                borderRadius="3px"
                border="2px solid rgba(25,25,25,1)"
                align="center"
                justify="center"
                fontSize="14.5px"
                fontWeight="bold"
              >
                Add New Admin
              </Flex>
            </Box>
            <Flex alignItems="center" fontWeight="bold">
              {/* <Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
              {`${userProfile.firstName?.charAt(
                0
              )}${userProfile.lastName?.charAt(0)}`}	
            </Circle> */}
              <Box>
                <Text fontSize="1.5rem">{userProfile?.fullName}</Text>
              </Box>
            </Flex>
            <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
              <Box onClick={() => navigateTabs("profile")}>
                <Tab tabname="profile" currentTab={currentTab} />
              </Box>
              <Box onClick={() => navigateTabs("permissions")}>
                <Tab tabname="permissions" currentTab={currentTab} />
              </Box>
            </Flex>
            <Permission />
          </Box>
        </HStack>
      </Box>
      <AddNewAdmin isOpen={successOpen} onClose={closeModal} />
    </>
  );
}
export default withAuth(UserPermissions);

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    ctx.query.limit = 15;
    const pagingOptions = filterPagingSearchOptions(ctx);
    const userId = ctx.query.adminId;

    try {
      const allUsers = (
        await AdminService.listAdmins(pagingOptions.offset, pagingOptions.limit)
      ).data as UserViewPagedCollectionStandardResponse;
      const singleUser = (await AdminService.getUserById(
        userId
      )) as UserViewPagedCollectionStandardResponse;

      //   console.log({ allUsers, userId, singleUser });

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
