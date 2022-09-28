import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Icons from "./Icons";

interface SearchProps {
  border?: boolean;
}
function SearchComponent({ border = true }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const getSearchedResult = async () => {
    router.push({
      query: {
        ...router.query,
        search: searchTerm,
      },
    });
  };
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      getSearchedResult();
    }
  };
  const clearSearch = () => {
    setSearchTerm("");

    router.push({
      query: {
        ...router.query,
        search: "",
      },
    });
  };
  return (
    <InputGroup>
      <InputLeftElement
        h="42px"
        w="42px"
        children={<BsSearch color="rgba(0, 0, 0, 0.4)" />}
      />
      <Input
        type="text"
        placeholder="Search"
        height="2.5rem"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setSearchTerm(e.target.value)
        }
        onKeyDown={handleKeyPress}
        value={searchTerm}
        _placeholder={{
          fontSize: "14px",
          fontWeight: 600,
        }}
        border={border ? "2px solid black" : "none"}
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
      {searchTerm !== "" && (
        <InputRightElement onClick={clearSearch}>
          <Icons iconClass="fa-times" />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default SearchComponent;
