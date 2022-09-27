import { Box, Flex, VStack, Text, Heading, Grid } from "@chakra-ui/react";
import Naira from "lib/Utils/Naira";
import React from "react";
import { LoanView, LoanViewPagedCollectionStandardResponse } from "Services";
const moment = require("moment");

function Loans({
  getUserLoan,
}: {
  getUserLoan: LoanViewPagedCollectionStandardResponse;
}) {
  console.log({ getUserLoan });
  const userLoan: LoanView[] | null | undefined = getUserLoan.data?.value;

  return (
    <Flex mt="2rem" pr="1rem">
      <VStack spacing="1rem" alignItems="flex-start" w="40%" display="none">
        <Heading fontSize="18px" fontWeight="bold">
          Statistics
        </Heading>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Total Loan Amount
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            ₦3,567,800
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Current Loan Amount
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            ₦500,000
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Current Loan Balance
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            ₦500,000
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
            Credit Score
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
            ₦500,000
          </Text>
        </Box>
      </VStack>
      <Box w="60%">
        <Heading fontSize="18px" fontWeight="bold" mb="1.5rem">
          Loans
        </Heading>
        {userLoan?.length === 0 ? (
          <Text textAlign="center">No Data Available</Text>
        ) : (
          <Grid templateColumns="repeat(3, 1fr)" gap="1.5rem" w="full">
            {userLoan?.map((x: LoanView) => {
              return (
                <VStack
                  spacing="1rem"
                  alignItems="flex-start"
                  borderBottom="1px solid rgba(151,151,151,.4)"
                  pb="1.5rem"
                >
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Amount
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      {Naira(x.amount)}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Date Approved
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      {moment(x.dateCreated).format("DD/MM/YY")}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Loan Type
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      {x.loanType}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Tenure
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      {x.loanTermInMonth + " Months"}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Interest Rate
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      15%
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Instalments
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      ₦500,000/Monthly
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Loan Status
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      {x.status}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="rgba(15,15,15,.5)"
                    >
                      Loan Balance
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="medium"
                      color="rgba(15,15,15,1)"
                    >
                      0
                    </Text>
                  </Box>
                </VStack>
              );
            })}
            <VStack
              spacing="1rem"
              alignItems="flex-start"
              borderBottom="1px solid rgba(151,151,151,.4)"
              pb="1.5rem"
            >
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Amount
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  ₦3,567,800
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Date Approved
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  25/11/22
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Loan Type
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  Personal
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Tenure
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  6 Months
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Interest Rate
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  15%
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Instalments
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  ₦500,000/Monthly
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Loan Status
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  Repaid
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Loan Balance
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  0
                </Text>
              </Box>
            </VStack>
            <VStack
              spacing="1rem"
              alignItems="flex-start"
              borderBottom="1px solid rgba(151,151,151,.4)"
              pb="1.5rem"
            >
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Amount
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  ₦3,567,800
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Date Approved
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  25/11/22
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Loan Type
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  Personal
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Tenure
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  6 Months
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Interest Rate
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  15%
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Instalments
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  ₦500,000/Monthly
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Loan Status
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  Repaid
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="rgba(15,15,15,.5)"
                >
                  Loan Balance
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="rgba(15,15,15,1)"
                >
                  0
                </Text>
              </Box>
            </VStack>
          </Grid>
        )}
      </Box>
    </Flex>
  );
}

export default Loans;
