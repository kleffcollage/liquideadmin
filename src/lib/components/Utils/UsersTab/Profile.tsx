import { Box, Flex, VStack, Text, Switch } from "@chakra-ui/react";
import React from "react";

function Profile() {
	return (
		<Flex justify="space-between" mt="2rem" pr="5rem">
			<VStack spacing="1rem" alignItems="flex-start">
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						First Name
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						Pade
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Surname
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						Omotosho
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Email
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						pade.omotosho@gmail.com
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Mobile
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						080765432435
					</Text>
				</Box>
			</VStack>
			<VStack spacing="1rem" alignItems="flex-start">
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Net worth
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦2,345,789,90
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Flex Balance
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						₦450,000
					</Text>
				</Box>
				<Box>
					<Text fontSize="12px" fontWeight="medium" color="rgba(15,15,15,.5)">
						Account Number
					</Text>
					<Text fontSize="14px" fontWeight="medium" color="rgba(15,15,15,1)">
						00853739234
					</Text>
				</Box>
			</VStack>
			<VStack spacing="1rem" alignItems="flex-start">
				<Flex>
					<Text
						fontSize="12px"
						fontWeight="medium"
						color="rgba(15,15,15,.5)"
						mr="0.5rem"
					>
						Account Active
					</Text>
					<Switch colorScheme="brand" defaultChecked />
				</Flex>
			</VStack>
		</Flex>
	);
}

export default Profile;
