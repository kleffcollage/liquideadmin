import { Box, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type CardsType = {
  text: string;
  url: string;
  icon: string;
};
function AdminMenu({ text, url, icon }: CardsType) {
  const router = useRouter();
  const getNavLinks = (style: string) => {
    if (router.asPath.startsWith(url)) return `${style}`;
  };
  return (
    <NextLink href={url} passHref>
      <HStack
        fontSize="1rem"
        color={getNavLinks("brand.100") ? "brand.300" : "white"}
        // backgroundColor={getNavLinks("rgba(223, 248, 249, 1)")}
        pl="2rem"
        cursor="pointer"
        w="100%"
        _hover={{ color: "brand.200", textDecoration: "unset" }}
        _focus={{ boxShadow: "0" }}
      >
        <i className={`fal ${icon}`} style={{ width: "2rem" }}></i>
        <Text>{text}</Text>
      </HStack>
    </NextLink>
  );
}

export default AdminMenu;
