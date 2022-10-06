import {
  Box,
  Button,
  FormLabel,
  GridItem,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

function LogoutPrompt({
  isOpen,
  onClose,
  handleLogout,
}: {
  isOpen: boolean;
  onClose: any;
  handleLogout: any;
}) {
  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent
        py={5}
        borderRadius="10px"
        w={["88%", "50%"]}
        overflow="hidden"
        maxH="100vh"
        mt="0"
        mb="0"
        boxShadow="0 2px 13px 0 rgba(0,0,0,0.17)"
      >
        <ModalHeader>
          <Text
            color="black"
            fontSize="1.1rem"
            textAlign="left"
            fontWeight="semibold"
            px={5}
          >
            Logout Prompt
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Box px={5}>
            <Text>Are you sure you want to Logout?</Text>
            <HStack mt="3rem">
              <Button
                w="full"
                height="3rem"
                variant="outline"
                border="2px solid"
                borderColor="red.600"
                color="red.600"
                onClick={onClose}
                _hover={{
                  bgColor: "red.600",
                  color: "white",
                }}
              >
                No, thanks!
              </Button>
              <Button w="full" height="3rem" onClick={handleLogout}>
                Yes, I'm sure
              </Button>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default LogoutPrompt;
