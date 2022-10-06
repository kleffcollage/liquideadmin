import { Text, Circle, Flex, Image, Icon } from "@chakra-ui/react";
import Icons from "lib/components/Utilities/Icons";
import { UserContext } from "lib/Utils/MainContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function TopNav() {
  const router = useRouter();
  const { admin } = useContext(UserContext);

  return (
    <Flex
      align="center"
      h="4.5rem"
      bg="white"
      w="full"
      px={7}
      justifyContent="space-between"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Text fontSize="22px" fontWeight="bold" textTransform="capitalize">
        {router.pathname.replace("/admin/", "").split("/")[0]}
      </Text>
      <Flex align="center">
        <Text fontWeight="600" fontSize="1rem" pr=".8rem">
          {`Hi, ${admin ? admin.firstName : "Pade"}`}
        </Text>
        <Circle
          size="45px"
          overflow="hidden"
          bg="trnasparent"
          border="3px solid black"
        >
          {/* <Image src="" w="full" h="full" objectFit="cover" /> */}
          <Icons iconClass="fa-user-tie" style={{ fontSize: "1.5rem" }} />
        </Circle>
        {/* <Icon as={IoIosArrowDown} ml=".8rem" /> */}
      </Flex>
    </Flex>
  );
}
