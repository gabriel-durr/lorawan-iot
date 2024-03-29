import ReactApexChart from "react-apexcharts";
import {options} from "./options-spo-chart";
import {LungSpo} from "../../lung-spo";

import {NameChartsProps, DevicePropsProps} from "./../types/types-charts";

import {useState, useEffect} from "react";
import {NoData} from "../../no-data";

import {Text, VStack} from "@chakra-ui/react";

type SpoChartProps = {
	tabIndex: number;
	isConnected: boolean;
	nameCharts: NameChartsProps;
	livesimpleDevice: DevicePropsProps;
	healthyesDevice: DevicePropsProps;
	watchlifeDevice: DevicePropsProps;
};

type SeriesProps = {
	name: string;
	data: number[];
};

const SpoChart = ({
	tabIndex,
	isConnected,
	nameCharts,
	livesimpleDevice,
	healthyesDevice,
	watchlifeDevice,
}: SpoChartProps) => {
	const [series, setSeries] = useState<SeriesProps>({} as SeriesProps);
	const [spoValue, setSpoValue] = useState<number>(0);

	const optionsAndSpoName = {
		...options,
		title: {text: nameCharts.spoName.full},
	};

	useEffect(() => {
		if (!isConnected) return;

		switch (tabIndex) {
			case 0:
				setSeries({
					name: nameCharts.bpmName.abbreviated,
					data: livesimpleDevice.variables[1].histories,
				});

				setSpoValue(livesimpleDevice.variables[1].value);
				break;
			case 1:
				setSeries({
					name: nameCharts.bpmName.abbreviated,
					data: healthyesDevice.variables[1].histories,
				});

				setSpoValue(healthyesDevice.variables[1].value);
				break;
			case 2:
				setSeries({
					name: nameCharts.bpmName.abbreviated,
					data: watchlifeDevice.variables[1].histories,
				});

				setSpoValue(watchlifeDevice.variables[1].value);
				break;
		}
	}, [
		isConnected,
		nameCharts.bpmName.abbreviated,
		livesimpleDevice.variables,
		healthyesDevice.variables,
		watchlifeDevice.variables,
		tabIndex,
	]);

	return (
		<>
			{isConnected ? (
				<VStack
					minW={{base: "320px", md: "70%", lg: "30%"}}
					h={{base: "400px", md: "480px", lg: "420px"}}
					shadow="md"
					bg="whiteAlpha.900"
					p="1rem"
					color="gray.900">
					<ReactApexChart
						options={optionsAndSpoName}
						series={[series]}
						height="50%"
						width="100%"
					/>
					<LungSpo spoValue={spoValue} />
				</VStack>
			) : (
				<NoData bg="rgba(68,96,213,0.3)">
					Gráfico
					<Text as="strong" px="1" color="proiot.blue.800">
						SpO2
					</Text>
					Está sem dados para serem Visualizados
				</NoData>
			)}
		</>
	);
};

export default SpoChart;
