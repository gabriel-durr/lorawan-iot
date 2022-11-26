import React, {lazy, ReactNode, Suspense, useEffect, useState} from "react";
import {Stack} from "@chakra-ui/react";

import {Spinner} from "../spinner";
import {DevicePropsProps, NameChartsProps} from "./types/types-charts";

const BpmAndSpo = lazy(() => import("./bpm-and-spo"));
const BpmChart = lazy(() => import("./bpm-chart"));
const SpoChart = lazy(() => import("./spo-chart"));

type ChartsProps = {
	tabIndex: number;
	isConnected: boolean;
	nameCharts: NameChartsProps;
	livesimpleDevice: DevicePropsProps;
	healthyesDevice: DevicePropsProps;
	watchlifeDevice: DevicePropsProps;
	[rest: string]: any;
};

export const Charts = ({
	tabIndex,
	isConnected,
	healthyesDevice,
	livesimpleDevice,
	nameCharts,
	watchlifeDevice,
	...rest
}: ChartsProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
			align="center"
			spacing="8"
			direction={{base: "column", lg: "row"}}
			{...rest}>
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
