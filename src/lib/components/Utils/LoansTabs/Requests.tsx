import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Pagination from "lib/components/Utilities/Pagination";
import {
  ApproveBtn,
  RejectBtn,
  TableActions,
  TableData,
  TableDataWithAvatar,
  TableHead,
  TableStatus,
} from "lib/components/Utilities/Tables";
import Naira from "lib/Utils/Naira";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useToasts } from "react-toast-notifications";
import {
  AdminService,
  LoanView,
  LoanViewPagedCollectionStandardResponse,
  LoanViewStandardResponse,
} from "Services";
import { PagedCollection } from "types/AppTypes";
const moment = require("moment");

export default function Requests({
  data,
}: {
  data: LoanViewPagedCollectionStandardResponse;
}) {
  const loanRequests = data.data;
  const { addToast } = useToasts();
  const router = useRouter();
  console.log({ loanRequests });

  function ApproveButton({ d }: { d: number | undefined }) {
    const [loading, setLoading] = useState(false);
    const Approve = async (selected: any) => {
      setLoading(true);
      try {
        const result = (await AdminService.acceptLoan(
          selected
        )) as LoanViewStandardResponse;
        setLoading(false);
        console.log({ result });
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
    };
    return <ApproveBtn loading={loading} onClick={() => Approve(d)} />;
  }
  function RejectButton({ d }: { d: number | undefined }) {
    const [loading, setLoading] = useState(false);
    const Reject = async (selected: any) => {
      setLoading(true);
      try {
        const result = (await AdminService.rejectLoan(
          selected
        )) as LoanViewStandardResponse;
        setLoading(false);
        console.log({ result });
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
    };
    return <RejectBtn loading={loading} onClick={() => Reject(d)} />;
  }

  return (
    <>
      <HStack
        bgColor="white"
        pt="1.5rem"
        justifyContent="space-between"
        align="center"
        spacing={6}
        marginTop="0rem"
        cursor="pointer"
        px="1rem"
      >
        <InputGroup w="330px">
          <InputLeftElement
            h="42px"
            w="42px"
            children={<BsSearch color="rgba(0, 0, 0, 01)" />}
          />
          <Input
            placeholder="Search"
            height="2.5rem"
            bgColor="white"
            border="2px solid black"
            borderRadius="4px"
            boxShadow="0"
            fontSize="14px"
            fontWeight="medium"
            padding="0 3rem"
            color="black !important"
            _focus={{
              borderColor: "unset",
              border: "0",
            }}
          />
        </InputGroup>
        <HStack>
          <Flex
            w="142px"
            h="36px"
            justify="space-between"
            alignItems="center"
            px="1.1rem"
            border="2px solid black"
            borderRadius="3px"
          >
            <Text color="black" fontSize="14px" fontWeight="600">
              Export
            </Text>
            <i className="far fa-file-export" style={{ color: "black" }}></i>
          </Flex>

          <Select
            w="99px"
            bgColor="black"
            borderRadius="3px"
            color="white"
            placeholder="Filter"
            fontSize="12px"
            fontWeight="500"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
      </HStack>
      <Box
        w="full"
        minH="500px"
        bgColor="white"
        // boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
        borderRadius="5"
        p=" 1rem 0"
      >
        <TableContainer h="100%" overflowY="hidden">
          <Table variant="simple">
            <Thead>
              <Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
                <TableHead title="User" />
                <TableHead title="Amount" />
                <TableHead title="Term" />
                <TableHead title="Type" />
                <TableHead title="Schedule" />
                <TableHead title="Date Applied" />
                <TableHead title="Status" />
                <TableHead title="" />
              </Tr>
            </Thead>

            <Tbody>
              {loanRequests?.value?.length === 0 ? (
                <Box w="full" h="300px" pos="relative">
                  <Flex
                    justify="center"
                    align="center"
                    h="300px"
                    pos="absolute"
                    left="300%"
                  >
                    <Text>
                      There's currently no data available. Check back later
                    </Text>
                  </Flex>
                </Box>
              ) : (
                <>
                  {loanRequests?.value?.map((x: LoanView) => {
                    return (
                      <Tr key={x.id}>
                        <TableDataWithAvatar
                          name={x.user?.fullName as string}
                        />
                        <TableData name={Naira(x.amount)} />
                        <TableData name={`${x.loanTermInMonth} Months`} />
                        <TableData name={x.loanType} />
                        <TableData name="Monthly" />
                        <TableData
                          name={moment(x.dateCreated).format("D/MM/YY - LT")}
                        />
                        <TableData name={x.status?.toLocaleLowerCase()} />
                        <Td>
                          <HStack spacing={4}>
                            <RejectButton d={x.id} />
                            <ApproveButton d={x.id} />
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Pagination data={loanRequests as PagedCollection} />
      </Box>
    </>
  );
}
