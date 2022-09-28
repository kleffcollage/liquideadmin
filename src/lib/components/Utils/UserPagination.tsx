import { Box } from "@chakra-ui/react";
import React from "react";
import Pagination from "../Utilities/Pagination";

function UserPagination({allUsers}: any) {
  return (
    <Box
      mt="0rem"
      pos="absolute"
      bottom="0"
      pb="2rem"
      left="50%"
      transform="translate(-50%)"
      width="100%"
    >
      <Pagination data={allUsers} display="none" justify="center" />
    </Box>
  );
}

export default UserPagination;
