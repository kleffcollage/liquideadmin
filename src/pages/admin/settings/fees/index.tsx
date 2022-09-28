import { Box, Flex } from "@chakra-ui/react";
import Tab from "lib/components/Utilities/Tab";
import { useRouter } from "next/router";
import { useState } from "react";
import Fees from "lib/components/Utils/SettingsTab/Fees";

function FeeSetting() {
  const [currentTab, setCurrentTab] = useState("fees");
  const router = useRouter();
  const navigateTabs = (tabname: string) => {
    router.push(`/admin/settings/${tabname}`);
  };
  return (
    <Box>
      <Flex borderBottom="1px solid rgba(36,68,115,0.1)">
        <Box onClick={() => navigateTabs("fees")}>
          <Tab tabname="fees" currentTab={currentTab} />
        </Box>
        <Box onClick={() => navigateTabs("admins")}>
          <Tab tabname="admins" currentTab={currentTab} />
        </Box>
      </Flex>
      <Box w="100%" bgColor="white" p="1.5rem" minH="90vh">
        <Fees />
      </Box>
    </Box>
  );
}

export default FeeSetting;
