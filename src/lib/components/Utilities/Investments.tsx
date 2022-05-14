import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Requests from "../Utils/InvestmentsTab/Requests";
import Approval from "../Utils/LoansTabs/Approval";
import Review from "../Utils/LoansTabs/Review";
import Sourcing from "../Utils/LoansTabs/Sourcing";
import SecondaryTab from "./SecondaryTab";

function Investments() {
	const [currentTab, setCurrentTab] = useState("enquires");
	const navigateTabs = (tabname: string) => {
		setCurrentTab(tabname);
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
			{currentTab == "enquires" && <Review />}
			{currentTab == "requests" && <Requests />}
			{currentTab == "listings" && <Sourcing />}
		</Box>
	);
}

export default Investments;
