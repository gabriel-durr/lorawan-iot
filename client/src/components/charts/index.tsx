import {lazy, Suspense, useEffect, useState} from "react";
import {Stack} from "@chakra-ui/react";

import {useSocketCharts} from "../../hooks/use-socket-charts";
import {Environment} from "../../environment";
import {Spinner} from "../spinner";

const BpmAndSpo = lazy(() => import("./bpm-and-spo"));
const BpmChart = lazy(() => import("./bpm-chart"));
const SpoChart = lazy(() => import("./spo-chart"));

type ChartsProps = {
	tabIndex: number;
};

export const Charts = ({tabIndex}: ChartsProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

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

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			await new Promise(resolve => setTimeout(resolve, 400));
			setIsLoading(false);
		})();
	}, [tabIndex]);

	return (
		<Stack
			w={{base: "90%", md: "100%"}}
			justify="space-between"
			spacing="8"
			direction={{base: "column", lg: "row"}}>
			<Suspense fallback={<Spinner />}>
				{!isLoading ? (
					<>
						<BpmAndSpo
							tabIndex={tabIndex}
							isConnected={isConnected}
							nameCharts={nameCharts}
							livesimpleDevice={livesimpleDevice}
							healthyesDevice={healthyesDevice}
							watchlifeDevice={watchlifeDevice}
						/>

						<BpmChart
							tabIndex={tabIndex}
							isConnected={isConnected}
							nameCharts={nameCharts}
							livesimpleDevice={livesimpleDevice}
							healthyesDevice={healthyesDevice}
							watchlifeDevice={watchlifeDevice}
						/>

						<SpoChart
							tabIndex={tabIndex}
							isConnected={isConnected}
							nameCharts={nameCharts}
							livesimpleDevice={livesimpleDevice}
							healthyesDevice={healthyesDevice}
							watchlifeDevice={watchlifeDevice}
						/>
					</>
				) : (
					<Spinner />
				)}
			</Suspense>
		</Stack>
	);
};
