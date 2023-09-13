import { Box, Flex, VStack, Text, Heading, Grid } from "@chakra-ui/react";
import TxnPaginate from "lib/components/Utilities/TxnPaginate";
import Naira from "lib/Utils/Naira";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AdminService, LoanView, LoanViewPagedCollection } from "services";
import { PagedCollection } from "types/AppTypes";
const moment = require("moment");

function Loans({
  getUserLoan,
  id,
}: {
  getUserLoan: LoanViewPagedCollection | undefined | null;
  id: number;
}) {
  console.log({ getUserLoan });
  const [allTxn, setAllTxn] = useState(getUserLoan);
  const [loading, setLoading] = useState<boolean>(false);
  const userLoan: LoanView[] | null | undefined = allTxn?.value;

  console.log({ allTxn });

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
      <Box w="100%">
        <Heading fontSize="18px" fontWeight="bold" mb="1.5rem">
          Loans
        </Heading>
        {userLoan?.length === 0 ? (
          <Text textAlign="center">No Data Available</Text>
        ) : (
          <>
            {loading ? (
              <Skeleton count={8} className="skeleton" />
            ) : (
              <>
                <Grid templateColumns="repeat(5, 1fr)" gap="1.5rem" w="full">
                  {userLoan?.map((x: LoanView) => {
                    return (
                      <VStack
                        spacing="1rem"
                        alignItems="flex-start"
                        key={x.id}
                        // pb="1.5rem"
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
                            {"15%"}
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
                </Grid>
                <TxnPaginate
                  data={allTxn as PagedCollection}
                  setTxn={setAllTxn}
                  id={id}
                  api={AdminService.getUserLoan}
                  setLoading={setLoading}
                />
              </>
            )}
          </>
        )}
      </Box>
    </Flex>
  );
}

export default Loans;
