import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { UserService } from "Services";

function Switcher({ checked, user, onClick, setChecked }: any) {
  console.log({ onClick });

  const { addToast } = useToasts();
  const activateCheck = async (id: any) => {
    setChecked(!checked);
    if (onClick == false) {
      return;
    }
    if (onClick == true && checked == false) {
      try {
        const result = await UserService.activateUser(id);
        if (result.status) {
          addToast(result.message, {
            appearance: "success",
            autoDismiss: true,
          });
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
    if (onClick == true && checked == true) {
      try {
        const result = await UserService.deactivateUser(id);
        if (result.status) {
          addToast(result.message, {
            appearance: "success",
            autoDismiss: true,
          });
          //   router.reload();
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
      <Flex my={onClick ? "0" : "1rem"}>
        <Text
          fontSize="12px"
          fontWeight="medium"
          color="rgba(15,15,15,.5)"
          mr="0.5rem"
          display={onClick ? "none" : "block"}
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
          onClick={() => activateCheck(user?.id)}
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

      {!onClick && (
        <Button w="full" height="3rem" onClick={() => activateCheck(user.id)}>
          Update
        </Button>
      )}
    </>
  );
}

export default Switcher;
