import { Button, Flex, Icon, Square, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PagedCollection } from "types/AppTypes";

interface PaginationProps {
  data: PagedCollection;
  display?: string | undefined;
  justify?: string | undefined;
  setTxn?: any;
  id?: any;
  api?: any;
  setLoading?: any;
}

function Pagination({
  data,
  display,
  justify = "flex-end",
  setTxn,
  id,
  api,
  setLoading,
}: PaginationProps) {
  const totalPages = Math.ceil(
    (data?.size as number) / (data?.limit as unknown as number)
  );

  const currentPage = (((data?.limit as unknown as number) +
    (data?.offset as unknown as number)) /
    (data?.limit as unknown as number)) as number;

  const router = useRouter();
  const next = data?.next?.href;
  const previous = data?.previous?.href;

  const paginate = async (direction: "next" | "previous") => {
    let link = "";
    if (direction == "previous" && previous != null) {
      let url = new URL(previous!);
      const limit = url.searchParams.get("limit");
      const offset = url.searchParams.get("offset");
      setLoading(true);
      const getPrev = await api(
        id,
        offset as unknown as number,
        limit as unknown as number
      );
      if (getPrev.status) {
        setLoading(false);
        setTxn(getPrev.data);
      }
    }
    if (direction == "next" && next != null) {
      link = next!.split("?")[1];
      let url = new URL(next!);
      const limit = url.searchParams.get("limit");
      const offset = url.searchParams.get("offset");
      setLoading(true);
      const getNext = await api(
        id,
        offset as unknown as number,
        limit as unknown as number
      );
      if (getNext.status) {
        setLoading(false);
        setTxn(getNext.data);
      }
    }
  };
  return (
    <Flex
      align="center"
      justify={justify}
      p="1rem 2rem 0"
      display={data?.size === 0 ? "none" : "flex"}
    >
      <Text
        fontSize="14px"
        fontFamily="Poppins"
        color="black"
        mr="1rem"
        display={display}
      >
        {`${data?.size || 0} items`}
      </Text>
      <Flex align="center">
        <Button
          w="2rem"
          borderRadius="2px"
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
          bgColor="#E2E8F0;"
          cursor="pointer"
          disabled={previous == null}
          onClick={() => paginate("previous")}
          _hover={{ color: "white" }}
        >
          <Icon as={FiChevronLeft} color="#323232" fontSize="1.2rem" />
        </Button>
        <Text fontSize="14px" fontFamily="Poppins" px="1.5rem" color="black">
          {`${currentPage} of ${totalPages}`}
        </Text>
        <Button
          w="2rem"
          borderRadius="2px"
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
          bgColor="#E2E8F0;"
          cursor="pointer"
          disabled={next == null}
          onClick={() => paginate("next")}
          _hover={{ color: "white" }}
        >
          <Icon as={FiChevronRight} color="#323232" fontSize="1.2rem" />
        </Button>
      </Flex>
    </Flex>
  );
}

export default Pagination;
