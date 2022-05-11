import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";

export type propTypes = {
	main: string;
	submain: string;
	shortinfo: string;
	img: string;
};

function RightTextHero({ main, submain, shortinfo, img }: propTypes) {
	return (
		<Stack
			direction={["column-reverse", "row"]}
			align="center"
			justifyContent="flex-end"
		>
			<Flex
				w={["full", "40%"]}
				mr={["0", "-10% !important"]}
				mt={["-26% !important", "0 !important"]}
				h={["23rem", "30rem"]}
				bg="rgba(255,255,255,0.7)"
				align="center"
				pl={["1rem", "5rem"]}
				pr={["1rem", "1.5rem"]}
				zIndex={2}
			>
				<Box w="full">
					<Flex flexWrap="wrap" alignItems="baseline">
						<Text
							fontSize={["35px", "70px"]}
							color="black"
							fontWeight="semibold"
							pr="1rem"
							lineHeight="1"
						>
							{main}
						</Text>
						<Text
							fontSize={["30px", "45px"]}
							fontWeight="medium"
							lineHeight="1"
						>
							{submain}
						</Text>
					</Flex>
					<Text fontSize={["1rem", "20px"]} fontWeight="regular" my="1.5rem">
						{shortinfo}
					</Text>
					<Button>Get Liquede</Button>
				</Box>
			</Flex>
			<Box w={["full", "60%"]} h={["15rem", "30rem"]} zIndex={1}>
				<Image src={img} w="full" h="full" objectFit="cover" />
			</Box>
		</Stack>
	);
}

export default RightTextHero;
