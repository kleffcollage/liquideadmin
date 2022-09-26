import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function HideAdmin() {
	return (
		<Flex
			w="full"
			bgColor="black"
			h="100vh"
			justify="center"
			align="center"
			px={16}
			flexDirection="column"
		>
			<Text fontSize="2rem" fontWeight="medium" color="white">
				Sorry we do not support admin view on this screen resolution.
			</Text>
			<Text fontSize="2rem" fontWeight="medium" color="white">
				kindly upgrade your device to a larger screen or toggle full screen if
				you're viewing with a minimized tab on browser
			</Text>
		</Flex>
	);
}

export default HideAdmin;
