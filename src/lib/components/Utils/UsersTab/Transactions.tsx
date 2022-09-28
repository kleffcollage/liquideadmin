import {
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Filter from "lib/components/Utilities/Filter";
import Pagination from "lib/components/Utilities/Pagination";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import Naira from "lib/Utils/Naira";
import { MdFilterList } from "react-icons/md";
import { TransactionView, TransactionViewPagedCollection } from "Services";
import { PagedCollection } from "types/AppTypes";
const moment = require("moment");

interface transactionProps {
  transaction: TransactionViewPagedCollection | undefined | null;
}
function Transactions({ transaction }: transactionProps) {
  return (
    <>
      <Filter />
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
                <TableHead title="Date & Time" />
                <TableHead title="Channel" />
                <TableHead title="Service" />
                <TableHead title="Amount" />
                <TableHead title="Provider" />
                <TableHead title="Status" />
              </Tr>
            </Thead>
            <Tbody>
              {transaction?.value?.length === 0 ? (
                <Box w="full" h="300px" pos="relative">
                  <Flex
                    justify="center"
                    align="center"
                    h="300px"
                    pos="absolute"
                    left="100%"
                  >
                    <Text>
                      There's currently no data available. Check back later
                    </Text>
                  </Flex>
                </Box>
              ) : (
                <>
                  {transaction?.value?.map((x: TransactionView) => {
                    return (
                      <Tr key={x.id}>
                        <TableData
                          name={moment(x.dateCreated).format("D/MM/YY - LT")}
                        />
                        <TableData name={x.channel} />
                        <TableData name={x.title} />
                        <TableData name={Naira(x.amount)} />
                        <TableData name={x.provider} />
                        <TableData name={x.status?.toLocaleLowerCase()} />
                      </Tr>
                    );
                  })}
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Pagination data={transaction as PagedCollection} />
      </Box>
    </>
  );
}

export default Transactions;
