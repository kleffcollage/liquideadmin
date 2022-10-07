import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Pagination from "lib/components/Utilities/Pagination";
import { CSVLink } from "react-csv";
import {
  TableData,
  TableDataName,
  TableHead,
  TableStatus,
} from "lib/components/Utilities/Tables";
import Naira from "lib/Utils/Naira";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  TransactionView,
  TransactionViewPagedCollectionStandardResponse,
} from "Services";
import { PagedCollection } from "types/AppTypes";
import { TableCheckbox } from "./TableCheckbox";
import TableNoContentWrapper from "./TableNoContentWrapper";
const moment = require("moment");

function AdminTransaction({
  data,
}: {
  data: TransactionViewPagedCollectionStandardResponse;
}) {
  const transaction = data.data;

  const thead = [
    {
      label: "User",
      key: "user.fullName",
    },
    {
      label: "Amount",
      key: "amount",
    },
    {
      label: "Recepient",
      key: "title",
    },
    {
      label: "Provider",
      key: "provider",
    },
    {
      label: "Channel",
      key: "channel",
    },
    {
      label: "Time",
      key: "dateCreated",
    },
    {
      label: "Status",
      key: "status",
    },
  ];
  const [select, setSelect] = useState<any>({
    List: transaction?.value,
    MasterChecked: false,
    SelectedList: [],
  });
  const onMasterCheck = (e: any) => {
    let tempList = select.List;
    // Check/ UnCheck All Items
    tempList?.map((x: any) => (x.selected = e.target.checked));

    //Update State
    setSelect({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: select?.List?.filter((e: any) => e.selected),
    });
  };

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e: any, item: any) => {
    let tempList = select.List;
    tempList?.map((x: any) => {
      if (x.id === item.id) {
        x.selected = e.target.checked;
      }
      return x;
    });

    //To Control Master Checkbox State
    const totalItems = select?.List?.length;
    const totalCheckedItems = tempList?.filter((e: any) => e.selected).length;

    // Update State
    setSelect({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: select?.List?.filter((e: any) => e.selected),
    });
  };

  // Event to get selected rows(Optional)
  const getSelectedRows = () => {
    setSelect({
      SelectedList: select?.List?.filter((e: any) => e.selected),
    });
  };

  //Export Selection
  const csvReport = {
    data: select.SelectedList,
    headers: thead,
    filename: "LiquedeTxnReport.csv",
  };

  console.log(select.List);
  console.log(transaction?.value);

  useEffect(() => {
    if (select.List !== transaction?.value) {
      setSelect({
        List: transaction?.value,
        MasterChecked: false,
        SelectedList: [],
      });
    }
  }, [transaction?.value]);

  return (
    <>
      {/* <Text>{select.List === transaction?.value ? "true" : "false"}</Text> */}
      <HStack
        bgColor="white"
        pt="1rem"
        justifyContent="space-between"
        align="center"
        spacing={6}
        marginTop="1rem"
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
          <Button
            w="142px"
            h="36px"
            display="flex"
            justifyContent="space-between"
            bgColor="transparent"
            alignItems="center"
            px="1.1rem"
            border="2px solid black"
            borderRadius="3px"
            disabled={select.SelectedList < 1}
            _hover={{ bgColor: "unset" }}
            className={select.SelectedList < 1 ? "hide" : "show"}
          >
            <CSVLink {...csvReport}>
              <Text color="black" fontSize="14px" fontWeight="600">
                Export: {select.SelectedList.length}
              </Text>
            </CSVLink>
            <i className="far fa-file-export" style={{ color: "black" }}></i>
          </Button>

          {/* <Select
            placeholder="5 aug 2020 - 7 aug 2020"
            borderRadius="3px"
            w="217px"
            color="rgba(0, 0, 0, 1)"
            fontSize="12px"
            fontWeight="500"
            border="2px solid black"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select> */}
          <Select
            w="99px"
            bg="black"
            borderRadius="3px"
            placeholder="Filter"
            fontSize="12px"
            fontWeight="500"
            color="white"
            className="select"
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
        <TableContainer h="500px" overflowY="hidden">
          <Table variant="simple">
            <Thead>
              <Tr w="full" bgColor="rgba(0,0,0,.03)" h="3rem">
                <th>
                  <TableCheckbox
                    checked={select.MasterChecked}
                    onChange={(e: any) => onMasterCheck(e)}
                  />
                </th>
                {thead.map((x, i) => (
                  <TableHead title={x.label} />
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {transaction?.value?.length === 0 ? (
                <TableNoContentWrapper
                  elements={
                    <Text>
                      There's currently no data available. Check back later
                    </Text>
                  }
                />
              ) : (
                <>
                  {transaction?.value?.map((x: TransactionView) => {
                    return (
                      <Tr
                        key={x.id}
                        bgColor={x.selected ? "gray.200" : "unset"}
                      >
                        <th>
                          <TableCheckbox
                            checked={x.selected}
                            onChange={(e: any) => onItemCheck(e, x)}
                          />
                        </th>
                        <TableDataName name={x.user?.fullName} />
                        <TableData name={Naira(x.amount)} />
                        <TableData name={x.title} />
                        {/* <TableData name="Google Gsuites" /> */}
                        <TableData name={x.provider ?? "-"} />
                        <TableData name={x.channel ?? "-"} />
                        <TableData
                          name={moment(x.dateCreated).format("D/MM/YY - LT")}
                        />
                        <TableStatus name={x.status?.toLocaleLowerCase()} />
                      </Tr>
                    );
                  })}
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        {/* <b>Selected Row Items(Click Button To Get):</b>
        <code>{JSON.stringify(select.SelectedList)}</code> */}
        <Pagination data={transaction as PagedCollection} />
      </Box>
    </>
  );
}

export default AdminTransaction;
