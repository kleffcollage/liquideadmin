import { Box, Circle, HStack, Switch, Td, Th, Button } from "@chakra-ui/react";
import Icons from "./Icons";
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";

export function TableHead({ title }: { title: string }) {
  return (
    <Th
      pl="1rem"
      fontSize="14px"
      fontWeight="700"
      color="black"
      textTransform="capitalize"
      fontFamily="body"
    >
      {title}
    </Th>
  );
}

export function TableData({ name }: { name: string | undefined | null }) {
  return (
    <Td
      fontSize="14px"
      fontWeight="500"
      color="black"
      pl="1rem"
      textTransform="capitalize"
    >
      {name}
    </Td>
  );
}
export function TableDataName({ name }: { name: string | undefined | null }) {
  return (
    <Td fontSize="14px" fontWeight="700" color="black" pl="1rem">
      {name}
    </Td>
  );
}
export function TableDataWithAvatar({ name }: { name: string }) {
  return (
    <Td
      fontSize="14px"
      fontWeight="600"
      color="black"
      pl="1rem"
      display="flex"
      alignItems="center"
    >
      <Circle bg="black" size="39px" mr=".5rem" color="white">
        {name
          .split(/\s/)
          .reduce((response, word) => (response += word.slice(0, 1)), "")}
      </Circle>
      {name}
    </Td>
  );
}
export function TableStatus({ name }: { name: string | undefined | null }) {
  return (
    <Td
      fontSize="14px"
      fontWeight="600"
      textTransform="capitalize"
      pl="1rem"
      color={
        name === "approved" || name === "successful" || name === "completed"
          ? "rgba(47,223,132,1)"
          : name === "pending"
          ? "rgba(227,188,106,1)"
          : "rgba(255,41,41,1)"
      }
    >
      {name}
    </Td>
  );
}
export function TableStatusSlider({ name }: { name: string }) {
  return (
    <Td
      fontSize="14px"
      fontWeight="500"
      pl="1rem"
      color={
        name === "Active" || name === "RESOLVED" ? "black" : "rgba(35,37,39,.5)"
      }
    >
      {name}
      <Switch
        colorScheme="brand"
        ml="1.5rem"
        defaultChecked={name === "Active" ? true : false}
      />
    </Td>
  );
}
export function TableActions() {
  return (
    <Td fontSize="14px" fontWeight="500" pl="1rem">
      <HStack spacing={5}>
        <Circle color="white" bgColor="rgba(223,57,47,1)" size="30px">
          <FaTimes />
        </Circle>
        <Circle color="white" bgColor="rgba(47,223,132,1)" size="30px">
          <FaArrowRight />
        </Circle>
      </HStack>
    </Td>
  );
}

export function ApproveBtn({ loading, onClick }: any) {
  return (
    <Button
      cursor="pointer"
      h="2rem"
      w="2rem"
      minW="unset"
      color="white"
      fontSize=".8rem"
      bgColor="rgba(47,223,132,1)"
      type="submit"
      borderRadius="50%"
      isLoading={loading}
      onClick={onClick}
    >
      <Icons iconClass="fa-arrow-right" />
    </Button>
  );
}

export function RejectBtn({ loading, onClick }: any) {
  return (
    <Button
      cursor="pointer"
      h="2rem"
      w="2rem"
      minW="unset"
      color="white"
      bgColor="rgba(223,57,47,1)"
      fontSize=".8rem"
      type="submit"
      borderRadius="50%"
      isLoading={loading}
      onClick={onClick}
    >
      <Icons iconClass="fa-times" />
    </Button>
  );
}
