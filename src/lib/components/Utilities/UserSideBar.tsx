import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { UserView } from "services";
import UserPagination from "../Utils/UserPagination";
import SearchComponent from "./SearchComponent";

function UserSideBar({ result, userId, allUsers }: any) {
  const router = useRouter();
  return (
    <Box w="20%">
      <Box bgColor="white" h="90vh" position="relative">
        <SearchComponent border={false} />
        {result?.map((user: UserView, i: number) => {
          return (
            <Box
              onClick={() => {
                router.push({
                  pathname: `/admin/users/${user.id}/profiles`,
                  query: { ...router.query },
                });
              }}
              key={user.id}
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
  );
}

export default UserSideBar;
