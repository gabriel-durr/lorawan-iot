import {lazy, Suspense} from "react";
import {Stack, Text} from "@chakra-ui/react";

import {useSocketCharts} from "../../hooks/use-socket-charts";
import {Environment} from "../../environment";
import {Spinner} from "../spinner";

const BpmAndSpo = lazy(() => import("./bpm-and-spo"));
const BpmChart = lazy(() => import("./bpm-chart"));
const SpoChart = lazy(() => import("./spo-chart"));

export const Charts = () => {
	const {
		isConnected,
		livesimpleDevice,
		healthyesDevice,
		watchlifeDevice,
		nameCharts,
	} = useSocketCharts({
		isConnect: true,
		host: Environment.HOST_LOCAL,
	});

	return (
		<Stack
			w={{base: "90%", md: "100%"}}
			justify="space-between"
			spacing="8"
			direction={{base: "column", lg: "row"}}>
			<Suspense fallback={<Spinner />}>
				<BpmAndSpo
					isConnected={isConnected}
					nameCharts={nameCharts}
					livesimpleDevice={livesimpleDevice}
					healthyesDevice={healthyesDevice}
					watchlifeDevice={watchlifeDevice}
				/>

				<BpmChart
					isConnected={isConnected}
					nameCharts={nameCharts}
					livesimpleDevice={livesimpleDevice}
					healthyesDevice={healthyesDevice}
					watchlifeDevice={watchlifeDevice}
				/>

				<SpoChart
					isConnected={isConnected}
					nameCharts={nameCharts}
					livesimpleDevice={livesimpleDevice}
					healthyesDevice={healthyesDevice}
					watchlifeDevice={watchlifeDevice}
				/>
			</Suspense>
		</Stack>
	);
};
