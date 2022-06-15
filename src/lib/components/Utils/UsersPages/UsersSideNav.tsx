import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import ProfileTab from "./ProfileTab";

function UsersSideNav() {
	const users = [
		{
			id: 1,
			fullName: "Pade Omotosho",
		},
		{
			id: 2,
			fullName: "Daniel Johnson",
		},
		{
			id: 3,
			fullName: "Tobi Israel",
		},
	];
	return (
		<>
			{users.map((user, i) => {
				return (
					<>
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
							<Link href={`admin/users/${user.id}/profile`} passHref>
								<Flex
									borderTop="1px solid rgba(36,68,115,0.3)"
									h="40px"
									role="group"
									cursor="pointer"
									alignItems="center"
									// bgColor={user.id ? "black" : "unset"}
									transition="all .2s ease"
									_hover={{ bgColor: "black" }}
									key={user.id}
								>
									<Text
										color="black"
										fontSize="14px"
										fontWeight="bold"
										pl="1.2rem"
										_groupHover={{ color: "white" }}
									>
										{user.fullName}
									</Text>
								</Flex>
							</Link>
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
						<ProfileTab user={user} />
					</>
				);
			})}
		</>
	);
}

export default UsersSideNav;
