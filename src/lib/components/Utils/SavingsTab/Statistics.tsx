import { Box, Flex, VStack, Text, Heading, Grid } from "@chakra-ui/react";
import Naira from "lib/Utils/Naira";
import React from "react";
import { SavingPlanTypeView } from "services";

function Statistics({ plan }: { plan: SavingPlanTypeView }) {
  return (
    <Flex mt="2rem" pr="1rem">
      <VStack spacing="1rem" alignItems="flex-start" w="40%">
        <Heading fontSize="18px" fontWeight="bold">
          Statistics
        </Heading>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            All Time Savings
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {Naira(plan.allTimeSavings)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Current Total Savings
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {Naira(plan.currentTotalSavings)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Active Users
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            {plan.savingsActiveUsers}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Statistics;
