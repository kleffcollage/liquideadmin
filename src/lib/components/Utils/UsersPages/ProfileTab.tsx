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
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { UserView } from "types/api";
import Profile from "../UsersTab/Profile";

function ProfileTab({ user }: { user: UserView }) {
	const [currentTab, setCurrentTab] = useState("profile");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/users/${user.id}/${tabname}`);
	};

	return (
		<HStack spacing="1rem" h="auto" alignItems="flex-start">
			<Box w="80%" bgColor="white" p="1.5rem" minH="90vh" ml="auto">
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
				{currentTab == "profile" && <Profile />}
			</Box>
		</HStack>
	);
}

export default ProfileTab;
