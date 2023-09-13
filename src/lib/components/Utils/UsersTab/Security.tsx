import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import LimitTransaction from "lib/components/Modals/LimitTransaction";
import SuccessModal from "lib/components/Modals/SuccessModal";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UserService, UserView } from "services";

function Security({ data }: { data: UserView }) {
  const [successOpen, setsuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const openModal = () => {
    setsuccessOpen(true);
  };
  const closeModal = () => {
    setsuccessOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const openIsModal = () => {
    setIsOpen(true);
  };
  const closeIsModal = () => {
    setIsOpen(false);
  };

  const resetUserPassword = async (email: string) => {
    setLoading(true);
    try {
      const response = await UserService.initiateReset(email);
      setLoading(false);
      if (response.status === true) {
        openModal();
        return;
      }
      addToast(response.message, { appearance: "error" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      addToast("An error occured", { appearance: "error" });
    }
  };
  return (
    <VStack w="50%" align="flex-start" spacing={6} mt="2rem !important">
      <Box w="80%" onClick={openIsModal}>
        <Button
          w="full"
          h="3rem"
          color="black"
          variant="outline"
          borderRadius="3px"
          border="2px solid rgba(25,25,25,1)"
          borderColor="black"
          fontSize="14.5px"
          fontWeight="bold"
          _hover={{ bgColor: "unset" }}
        >
          Set Transaction Limit
        </Button>
      </Box>
      <Box w="80%" onClick={() => resetUserPassword(data.email as string)}>
        <Button
          w="full"
          h="3rem"
          color="black"
          variant="outline"
          borderRadius="3px"
          border="2px solid rgba(25,25,25,1)"
          borderColor="black"
          fontSize="14.5px"
          fontWeight="bold"
          isLoading={loading}
          _hover={{ bgColor: "unset" }}
        >
          Reset Password
        </Button>
      </Box>
      <SuccessModal
        message="User’s password has been reset and they have been sent an email to create new password"
        isOpen={successOpen}
        onClose={closeModal}
      />
      <LimitTransaction isOpen={isOpen} onClose={closeIsModal} />
    </VStack>
  );
}

export default Security;
