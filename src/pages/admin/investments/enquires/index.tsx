import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import Enquires from "lib/components/Utils/InvestmentsTab/Enquires";
import { useRouter } from "next/router";
import { useState } from "react";

function Investments() {
	const [currentTab, setCurrentTab] = useState("enquires");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/investments/${tabname}`);
	};
	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("enquires")}>
					<SecondaryTab
						tabname="enquires"
						num={89}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("requests")}>
					<SecondaryTab
						tabname="requests"
						num={4}
						icon="fa-bell"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("listings")}>
					<SecondaryTab
						tabname="listings"
						num={9}
						icon="fa-building"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<Enquires />
		</Box>
	);
}

export default Investments;
