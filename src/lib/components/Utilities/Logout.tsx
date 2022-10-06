import { HStack, Text, useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import LogoutPrompt from "lib/components/Modals/LogoutPrompt";
import { useRouter } from "next/router";

function Logout() {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleLogout = () => {
    Cookies.remove("admin"), Cookies.remove("token");
    router.push("/admin");
  };
  return (
    <>
      ]
      <HStack
        fontSize="1rem"
        color="white"
        pl="2rem"
        cursor="pointer"
        w="100%"
        _hover={{ color: "brand.200", textDecoration: "unset" }}
        _focus={{ boxShadow: "0" }}
        onClick={onOpen}
        mt="1rem !important"
      >
        <i className={`fal fa-sign-out`} style={{ width: "2rem" }}></i>
        <Text>Logout</Text>
      </HStack>
      <LogoutPrompt
        isOpen={isOpen}
        onClose={onClose}
        handleLogout={handleLogout}
      />
    </>
  );
}

export default Logout;
