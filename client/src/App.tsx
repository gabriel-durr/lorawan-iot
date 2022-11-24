import {useState} from "react";
import {Environment} from "./environment";
import {useSocketCharts} from "./hooks/use-socket-charts";

import {
	Flex,
	Heading,
	Stack,
	Divider,
	Box,
	Text,
	Button,
	HStack,
} from "@chakra-ui/react";
import {Charts} from "./components/charts";
import {SelectDevice} from "./components/select-device";
import {ButtonDisable} from "./components/button-disable";
import {FeedbackActivation} from "./components/feedback-activation";

export const App = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	const [activateConnection, setActivateConnection] = useState(false);

	const {
		isConnected,
		livesimpleDevice,
		healthyesDevice,
		watchlifeDevice,
		nameCharts,
	} = useSocketCharts({
		isConnect: activateConnection,
		host: Environment.HOST_LOCAL,
	});

	function handleActiveConnection() {
		if (activateConnection) {
			setActivateConnection(false);
			return;
		}

		setActivateConnection(true);
	}

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

				<HStack pos="relative" w="384px" justify="end">
					<FeedbackActivation isConnect={isConnected} />
					<ButtonDisable
						isConnect={isConnected}
						handleActiveConnection={handleActiveConnection}
					/>
				</HStack>
				<Box pb={{base: "2rem"}} order={{base: "-1", lg: 0}}>
					<Heading>ProIot Challenge</Heading>
					<Divider orientation="horizontal" />
				</Box>
			</Stack>

			<Charts
				isConnected={isConnected}
				tabIndex={tabIndex}
				livesimpleDevice={livesimpleDevice}
				healthyesDevice={healthyesDevice}
				watchlifeDevice={watchlifeDevice}
				nameCharts={nameCharts}
			/>
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
