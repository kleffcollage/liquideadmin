import {
  Box,
  Flex,
  Icon,
  Spinner,
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
import TableNoContentWrapper from "lib/components/Utilities/TableNoContentWrapper";
import { TableData, TableHead } from "lib/components/Utilities/Tables";
import TxnPaginate from "lib/components/Utilities/TxnPaginate";
import Naira from "lib/Utils/Naira";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import {
  AdminService,
  TransactionView,
  TransactionViewPagedCollection,
} from "Services";
import { PagedCollection } from "types/AppTypes";
const moment = require("moment");
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface transactionProps {
  transaction: TransactionViewPagedCollection | undefined | null;
  id: number;
}
function Transactions({ transaction, id }: transactionProps) {
  const [allTxn, setAllTxn] = useState(transaction);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      {/* <Filter /> */}
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
              {allTxn?.value?.length === 0 ? (
                <TableNoContentWrapper
                  elements={
                    <Text>
                      There's currently no data available. Check back later
                    </Text>
                  }
                />
              ) : (
                <>
                  {loading ? (
                    <Skeleton
                      count={8}
                      className="skeleton"
                      containerClassName="sk-wrapper"
                    />
                  ) : (
                    <>
                      {allTxn?.value?.map((x: TransactionView) => {
                        return (
                          <Tr key={x.id}>
                            <TableData
                              name={moment(x.dateCreated).format(
                                "D/MM/YY - LT"
                              )}
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
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <TxnPaginate
          data={allTxn as PagedCollection}
          setTxn={setAllTxn}
          id={id}
          api={AdminService.listUsersTransaction}
          setLoading={setLoading}
        />
      </Box>
    </>
  );
}

export default Transactions;
