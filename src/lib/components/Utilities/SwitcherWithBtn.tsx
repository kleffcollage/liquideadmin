import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UserService } from "services";

function SwitcherWithBtn({ checked, user, setChecked }: any) {
  const { addToast } = useToasts();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const activateCheck = async (id: any) => {
    if (checked == true) {
      try {
        setLoading(true);
        const result = await UserService.activateUser(id);
        setLoading(false);
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
    if (checked == false) {
      try {
        setLoading(true);
        const result = await UserService.deactivateUser(id);
        setLoading(false);
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
    <>
      <Flex my={"1rem"}>
        <Text
          fontSize="12px"
          fontWeight="medium"
          color="rgba(15,15,15,.5)"
          mr="0.5rem"
        >
          {user.isActive == true ? "Disable Service" : "Enable Service"}
        </Text>
        <Flex
          w="2rem"
          h="1rem"
          bgColor={checked === true ? "brand.500" : "gray.300"}
          borderRadius="999px"
          padding="2px"
          cursor="pointer"
          boxSizing="content-box"
          align="center"
          onClick={() => setChecked(!checked)}
        >
          <Box
            bgColor="white"
            w="1rem"
            h="1rem"
            borderRadius="inherit"
            transition="all 150ms"
            transform={checked === true ? "translateX(100%)" : "translateX(0)"}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default SwitcherWithBtn;
