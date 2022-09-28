import {
  Flex,
  VStack,
  Select,
  SimpleGrid,
  GridItem,
  Button,
  HStack,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { PrimaryInput } from "lib/components/Utilities/PrimaryInput";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { AdminService, SavingPlanType } from "Services";

function Setup({ data }: { data: SavingPlanType }) {
  const { addToast } = useToasts();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SavingPlanType>({
    defaultValues: {
      id: data.id,
    },
  });

  const onSubmit = async (data: SavingPlanType) => {
    try {
      const result = await AdminService.updateSavingPlanType(data);
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
    <Flex mt="2rem" pr="1rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="1rem" alignItems="flex-start" w="40%">
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <PrimaryInput<SavingPlanType>
                register={register}
                name="name"
                error={errors.name}
                type="text"
                label="Plan name"
                defaultValue={data.name as string}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <FormLabel color="brand.100" fontSize="1.1rem" mt="1rem">
                Interest & Minimum
              </FormLabel>
              <HStack align="flex-end">
                <Input placeholder="5%" disabled variant="filled" h="3rem" />
                <Select
                  placeholder="1 Month"
                  w="full"
                  borderBottom="2px solid black"
                  border="0"
                  borderRadius="0"
                  bgColor="rgba(25,25,25,.03)"
                  color="rgba(37,36,39,1)"
                  fontSize="16px"
                  fontWeight="600"
                  disabled
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </HStack>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                w="full"
                mt="3rem"
                height="3rem"
                isLoading={isSubmitting}
                type="submit"
              >
                Update
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </Flex>
  );
}

export default Setup;
