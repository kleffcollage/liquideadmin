import { Box, Flex, VStack, Text, Switch } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UserService, UserView, UserViewStandardResponse } from "Services";

interface ProfileType {
  user: UserView | undefined;
  checked: any;
  setChecked: any;
}

function Profile({ user, setChecked, checked }: ProfileType) {
  const { addToast } = useToasts();
  const router = useRouter();
  const activateCheck = async (id: any) => {
    setChecked(!checked);
    if (checked == false) {
      try {
        const result = (await UserService.activateUser(
          id
        )) as UserViewStandardResponse;
        if (result.status) {
          addToast(result.message, {
            appearance: "success",
            autoDismiss: true,
          });
          router.reload();
          return;
        }
        addToast(result.message, {
          appearance: "error",
          autoDismiss: true,
        });
      } catch (err) {
        console.log(err);
        addToast("Check your network connection and try again", {
          appearance: "error",
          autoDismiss: true,
        });
      }
      return;
    }
    if (checked == true) {
      try {
        const result = (await UserService.deactivateUser(
          id
        )) as UserViewStandardResponse;
        if (result.status) {
          addToast(result.message, {
            appearance: "success",
            autoDismiss: true,
          });
          router.reload();
          return;
        }
        addToast(result.message, {
          appearance: "error",
          autoDismiss: true,
        });
      } catch (err) {
        console.log(err);
        addToast("Check your network connection and try again", {
          appearance: "error",
          autoDismiss: true,
        });
      }
      return;
    }
  };
  return (
    <Flex justify="space-between" mt="2rem" pr="5rem">
      <VStack spacing="1rem" alignItems="flex-start">
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            First Name
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.firstName}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Surname
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.lastName}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Email
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.email}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Mobile
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {user?.phoneNumber}
          </Text>
        </Box>
      </VStack>
      <VStack spacing="1rem" alignItems="flex-start">
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Net worth
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            ₦2,345,789,90
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Flex Balance
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            ₦450,000
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Account Number
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            00853739234
          </Text>
        </Box>
      </VStack>
      <VStack spacing="1rem" alignItems="flex-start">
        <Flex>
          <Text
            fontSize="12px"
            fontWeight="medium"
            color="rgba(15,15,15,.5)"
            mr="0.5rem"
          >
            Account Active
          </Text>
          <Flex
            w="2rem"
            h="1rem"
            bgColor={checked ? "brand.500" : "gray.300"}
            borderRadius="999px"
            padding="2px"
            cursor="pointer"
            boxSizing="content-box"
            align="center"
            onClick={() => activateCheck(user?.id)}
          >
            <Box
              bgColor="white"
              w="1rem"
              h="1rem"
              borderRadius="inherit"
              transition="all 150ms"
              transform={checked ? "translateX(100%)" : "translateX(0)"}
            />
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default Profile;
