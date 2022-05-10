import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

type CardsType = {
  text: string;
  url: string;
};
function AdminMenu({ text, url }: CardsType) {
  const router = useRouter();
  const getNavLinks = (style: string) => {
    if (router.asPath.startsWith(url)) return `${style}`;
  };
  return (
    // <Box p={p} display="inline">
    <NextLink href={url} passHref>
      <Link
        fontSize="1rem"
        color={getNavLinks('brand.100') ? '' : 'white'}
        backgroundColor={getNavLinks('rgba(223, 248, 249, 1)')}
        p="1rem 0 1rem 3rem"
        w="100%"
        _hover={{ color: 'brand.200', textDecoration: 'unset' }}
        _focus={{ boxShadow: '0' }}
      >
        {text}
      </Link>
    </NextLink>
    /* </Box> */
  );
}

export default AdminMenu;
