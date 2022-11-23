import {useState} from "react";

import {Flex, Heading, Text} from "@chakra-ui/react";
import {Charts} from "./components/charts";
import {SelectDevice} from "./components/select-device";

export const App = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<Flex
			gap="8"
			pt="150px"
			w={{base: "90%", md: "container.md", lg: "container.xl"}}
			m="auto"
			justify="center"
			direction="column">
			<SelectDevice tabIndex={tabIndex} setTabIndex={setTabIndex} />

			<Charts tabIndex={tabIndex} />
			<Text fontSize="xs" alignSelf="center">
				<Text as="strong">ProIoT Challenge</Text> 💟🤞 Developed and
				Designed by
				<Text px="5px" color="proiot.purple.800" as="span">
					Gabriel Dürr
				</Text>
			</Text>
		</Flex>
	);
};
