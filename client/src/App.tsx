import {useState} from "react";
import {Environment} from "./environment";
import {useSocketCharts} from "./hooks/use-socket-charts";

import {Flex, Heading, Stack, Divider, Box, HStack} from "@chakra-ui/react";
import {Charts} from "./components/charts";
import {SelectDevice} from "./components/select-device";
import {ChangeConnectionButton} from "./components/change-connection-button";
import {FeedbackActivation} from "./components/feedback-activation";
import {Footer} from "./components/footer";

const App = () => {
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
			as="main"
			data-testid="dashboard"
			gap="8"
			pt={{base: "2rem", md: "6rem"}}
			pb="1rem"
			w={{base: "100%", md: "container.md", lg: "container.xl"}}
			m="0 auto"
			justify="center"
			align="center"
			direction="column">
			<Stack
				as="section"
				w="100%"
				direction={{base: "column", lg: "row"}}
				align="center"
				justify="space-between">
				<SelectDevice tabIndex={tabIndex} setTabIndex={setTabIndex} />

				<HStack
					pos="relative"
					w={{base: "20.5rem", md: "23rem", lg: "22rem"}}
					justify="end">
					<FeedbackActivation isConnect={isConnected} />
					<ChangeConnectionButton
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
				as="section"
				isConnected={isConnected}
				tabIndex={tabIndex}
				livesimpleDevice={livesimpleDevice}
				healthyesDevice={healthyesDevice}
				watchlifeDevice={watchlifeDevice}
				nameCharts={nameCharts}
			/>
			<Footer />
		</Flex>
	);
};

export default App;
