import { Box, Flex, VStack } from "@chakra-ui/react";
import LimitTransaction from "lib/components/Modals/LimitTransaction";
import SuccessModal from "lib/components/Modals/SuccessModal";
import React, { useState } from "react";

function Security() {
	const [successOpen, setsuccessOpen] = useState(false);
	const openModal = () => {
		setsuccessOpen(true);
	};
	const closeModal = () => {
		setsuccessOpen(false);
	};
	const [isOpen, setIsOpen] = useState(false);
	const openIsModal = () => {
		setIsOpen(true);
	};
	const closeIsModal = () => {
		setIsOpen(false);
	};
	return (
		<VStack w="50%" align="flex-start" spacing={6} mt="2rem !important">
			<Box w="90%" onClick={openIsModal}>
				<Flex
					as="button"
					w="full"
					h="2.3rem"
					borderRadius="3px"
					border="2px solid rgba(25,25,25,1)"
					align="center"
					justify="center"
					fontSize="14.5px"
					fontWeight="bold"
				>
					Set Transactions Limit
				</Flex>
			</Box>
			<Box w="90%" onClick={openModal}>
				<Flex
					as="button"
					w="full"
					h="2.3rem"
					borderRadius="3px"
					border="2px solid rgba(25,25,25,1)"
					align="center"
					justify="center"
					fontSize="14.5px"
					fontWeight="bold"
				>
					Reset Password
				</Flex>
			</Box>
			<SuccessModal
				message="You have successfully reset the user password"
				isOpen={successOpen}
				onClose={closeModal}
			/>
			<LimitTransaction isOpen={isOpen} onClose={closeIsModal} />
		</VStack>
	);
}

export default Security;
