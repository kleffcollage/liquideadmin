import { Box, Flex, VStack, Text, Switch } from "@chakra-ui/react";
import Switcher from "lib/components/Utilities/Switcher";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UserService, UserView, UserViewStandardResponse } from "Services";

interface ProfileType {
  user: UserView | undefined;
  checked: any;
  setChecked: any;
}

function AdminProfile({ user, setChecked, checked }: ProfileType) {
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

  useEffect(() => {
    if (checked !== user?.isActive) {
      setChecked(user?.isActive);
    }
  }, [user?.isActive]);

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
        <Flex>
          <Text
            fontSize="12px"
            fontWeight="medium"
            color="rgba(15,15,15,.5)"
            mr="0.5rem"
          >
            {user?.isActive == true ? "Account Active" : "Account Inactive"}
          </Text>
          <Switcher
            checked={checked}
            user={user}
            onClick={true}
            setChecked={setChecked}
          />
        </Flex>
      </VStack>
    </Flex>
  );
}

export default AdminProfile;
