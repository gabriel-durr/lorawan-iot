import {lazy, Suspense, useEffect, useState} from "react";
import {HStack, useColorModeValue} from "@chakra-ui/react";

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

	const changingBgColor = useColorModeValue(
		"blackAlpha.100",
		"whiteAlpha.200"
	);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			await new Promise(resolve => setTimeout(resolve, 400));
			setIsLoading(false);
		})();
	}, [tabIndex]);

	return (
		<HStack
			w={{base: "100%", md: "80%", lg: "100%"}}
			h={{base: "450px", md: "550px", lg: "458px"}}
			bg={changingBgColor}
			p={{base: "14px", md: "1rem"}}
			px={{base: "0.6rem", lg: "3rem"}}
			overflowX={{base: "scroll", lg: "hidden"}}
			spacing={{base: "20px", md: "28px"}}
			align={{base: "flex-start", md: "center"}}
			justify={{base: "flex-start", lg: "space-around"}}
			sx={{
				"&::-webkit-scrollbar": {
					width: "0px",
				},
			}}
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
		</HStack>
	);
};
