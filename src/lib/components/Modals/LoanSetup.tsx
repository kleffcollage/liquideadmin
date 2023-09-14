import {
  Box,
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
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { AdminService, LoanType, LoanTypeListStandardResponse } from "Services";
import { LoginModel } from "types/AppTypes";
import { PrimaryInput } from "../Utilities/PrimaryInput";

function LoanSetup({
  isOpen,
  onClose,
  loanTypes,
}: {
  isOpen: boolean;
  onClose: any;
  loanTypes: LoanTypeListStandardResponse;
}) {
  const { addToast } = useToasts();
  const router = useRouter();
  const [selected, setSelected] = useState<any>();
  console.log(selected?.dataset.interest);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoanType>();

  const onSubmit = async (data: LoanType) => {
    data.id = selected?.value;
    console.log(data.id);
    try {
      const result = await AdminService.updateInterestRate(
        data.id as number,
        data.interestRate as unknown as string
      );
      if (result.status) {
        onClose();
        addToast(result.message, {
          appearance: "success",
          autoDismiss: true,
        });
        router.reload();
        return;
      }
      onClose();
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
            Update Loan Settings
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <VStack maxH="80vh" overflowY="auto" px={5}>
            <VStack spacing="1rem" alignItems="flex-start" w="full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Select
                  w="full"
                  borderBottom="2px solid black"
                  border="0"
                  borderRadius="0"
                  bgColor="rgba(25,25,25,.03)"
                  color="rgba(37,36,39,1)"
                  fontSize="16px"
                  fontWeight="600"
                  placeholder="Select an option"
                  onChange={(e: any) => {
                    setSelected(e.target.selectedOptions[0]);
                  }}
                >
                  {loanTypes?.data?.map((x: LoanType) => (
                    <option
                      value={x.id}
                      key={x.id}
                      data-interest={x.interestRate}
                    >
                      {x.name}
                    </option>
                  ))}
                </Select>
                <Box>
                  {selected !== undefined && (
                    <>
                      <FormLabel color="brand.100" fontSize="1.1rem" mt="1rem">
                        New Interest Rate
                      </FormLabel>
                      <PrimaryInput<LoanType>
                        register={register}
                        name="interestRate"
                        error={errors.interestRate}
                        defaultValue=""
                        type="text"
                        label="Interest rate"
                        placeholder="Interest rate"
                      />
                      <Text fontSize=".9rem" mt=".5rem">
                        Current Interest Rate: {selected?.dataset.interest}%
                      </Text>
                    </>
                  )}
                </Box>

                <Button
                  w="full"
                  mt="3rem"
                  height="3rem"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Update interest rate
                </Button>
              </form>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default LoanSetup;
