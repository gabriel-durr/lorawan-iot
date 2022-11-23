import {useState} from "react";

import {Flex, Heading, Stack, Divider, Box, Text} from "@chakra-ui/react";
import {Charts} from "./components/charts";
import {SelectDevice} from "./components/select-device";

export const App = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<Flex
			gap="8"
			pt={{base: "2rem", md: "6rem"}}
			pb="1rem"
			w={{base: "100%", md: "container.md", lg: "container.xl"}}
			m="0 auto"
			justify="center"
			align="center"
			direction="column">
			<Stack
				w="100%"
				direction={{base: "column", lg: "row"}}
				align="center"
				justify="space-between">
				<SelectDevice tabIndex={tabIndex} setTabIndex={setTabIndex} />
				<Box pb={{base: "2rem"}} order={{base: "-1", lg: 0}}>
					<Heading>ProIot Challenge</Heading>
					<Divider orientation="horizontal" />
				</Box>
			</Stack>

			<Charts tabIndex={tabIndex} />
			<Text fontSize={{base: "2xs", md: "xs"}} alignSelf="center">
				<Text as="strong">ProIoT Challenge</Text> 💟🤞 Developed and
				Designed by
				<Text px="5px" color="proiot.purple.800" as="span">
					Gabriel Dürr
				</Text>
			</Text>
		</Flex>
	);
};
