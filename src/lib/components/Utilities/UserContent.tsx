import { Flex, Circle, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Tab from "./Tab";

function UserContent({ currentTab, userProfile }: any) {
  const router = useRouter();
  const navigateTabs = (tabname: string) => {
    router.push({
      pathname: `/admin/users/${userProfile.id}/${tabname}`,
      query: { ...router.query },
    });
  };
  return (
    <>
      <Flex alignItems="center" fontWeight="bold">
        <Circle bgColor="brand.100" color="white" size="3rem" mr="1rem">
          {`${userProfile.firstName?.charAt(0)}${userProfile.lastName?.charAt(
            0
          )}`}
        </Circle>
        <Box>
          <Text fontSize="1.5rem">{userProfile.fullName}</Text>
        </Box>
      </Flex>
      <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
        <Box onClick={() => navigateTabs("profiles")}>
          <Tab tabname="profiles" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("transactions")}>
          <Tab tabname="transactions" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("savings")}>
          <Tab tabname="savings" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("loans")}>
          <Tab tabname="loans" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("investments")}>
          <Tab tabname="investments" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("payments")}>
          <Tab tabname="payments" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("slipcard")}>
          <Tab tabname="slipcard" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("security")}>
          <Tab tabname="security" currentTab={currentTab} />
        </Box>
      </Flex>
    </>
  );
}

export default UserContent;
