import {
	Box,
	Circle,
	Flex,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import Tab from "lib/components/Utilities/Tab";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Transactions from "../UsersTab/Transactions";

function TransactionTab() {
	const [currentTab, setCurrentTab] = useState("transactions");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/users/${tabname}`);
	};

	return (
		<HStack spacing="1rem" h="auto" alignItems="flex-start">
			<Box w="20%" bgColor="white" minH="90vh" h="100%">
				<InputGroup>
					<InputLeftElement
						h="42px"
						w="42px"
						children={<BsSearch color="rgba(0, 0, 0, 0.4)" />}
					/>
					<Input
						placeholder="Search"
						height="2.5rem"
						bgColor="white"
						border="0"
						boxShadow="0"
						fontSize="14px"
						fontWeight="medium"
						padding="0 3rem"
						_focus={{
							borderColor: "unset",
							border: "0",
						}}
					/>
				</InputGroup>
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					transition="all .2s ease"
					_hover={{ bgColor: "black" }}
				>
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						pl="1.2rem"
						_groupHover={{ color: "white" }}
					>
						Pade Omotosho
					</Text>
				</Flex>
				<Flex
					borderTop="1px solid rgba(36,68,115,0.3)"
					h="40px"
					role="group"
					cursor="pointer"
					alignItems="center"
					transition="all .2s ease"
					_hover={{ bgColor: "black" }}
				>
					<Text
						color="black"
						fontSize="14px"
						fontWeight="bold"
						pl="1.2rem"
						_groupHover={{ color: "white" }}
					>
						Pade Omotosho
					</Text>
				</Flex>
			</Box>
			<Box w="80%" bgColor="white" p="1.5rem" minH="90vh">
				<Flex alignItems="center" fontWeight="bold">
					<Circle bgColor="black" color="white" size="3rem" mr="1rem">
						PO
					</Circle>
					<Box>
						<Text fontSize="1.5rem">Pade Omotosho</Text>
					</Box>
				</Flex>
				<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt="2rem">
					<Box onClick={() => navigateTabs("profile")}>
						<Tab tabname="profile" currentTab={currentTab} />
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
				{currentTab == "transactions" && <Transactions />}
			</Box>
		</HStack>
	);
}

export default TransactionTab;
