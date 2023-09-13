import {
  Button,
  FormLabel,
  GridItem,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AdminService, Register, UserViewStandardResponse } from "Services/index";
import { PrimaryInput } from "../Utilities/PrimaryInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});

function AddNewAdmin({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
  const { addToast } = useToasts();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Register>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: Register) => {
    try {
      const result = (await AdminService.create(
        data
      )) as UserViewStandardResponse;
      console.log({ result });
      onClose();
      if (result.status) {
        addToast(result.message, {
          appearance: "success",
          autoDismiss: true,
        });
        router.reload();
        return;
      }
      addToast(result.message, { appearance: "error", autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
      addToast("Check your network connection and try again", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

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
            Add Admin
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack maxH="80vh" overflowY="auto" px={5} w="full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing="1rem" alignItems="flex-start" w="full">
                <PrimaryInput<Register>
                  register={register}
                  name="firstName"
                  error={errors.firstName}
                  defaultValue=""
                  type="text"
                  label="First name"
                  placeholder="First Name"
                />
                <PrimaryInput<Register>
                  register={register}
                  name="lastName"
                  error={errors.lastName}
                  defaultValue=""
                  type="text"
                  label="Surname"
                  placeholder="Surname"
                />
                <PrimaryInput<Register>
                  register={register}
                  name="email"
                  error={errors.email}
                  defaultValue=""
                  type="text"
                  label="Email"
                  placeholder="Email"
                />
                <Button
                  w="full"
                  mt="2rem"
                  height="3rem"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Add
                </Button>
              </VStack>
            </form>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default AddNewAdmin;
