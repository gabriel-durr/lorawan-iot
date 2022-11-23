import ReactApexChart from "react-apexcharts";
import {options} from "./options-bpm-chart";
import {HeartBpm} from "../../heart-bpm";

import {useState, useLayoutEffect} from "react";
import {Text, VStack} from "@chakra-ui/react";

import {NoData} from "../../no-data";

import {NameChartsProps, DevicePropsProps} from "./../types/types-charts";

type BpmChartProps = {
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

const BpmChart = ({
	tabIndex,
	isConnected,
	nameCharts,
	livesimpleDevice,
	healthyesDevice,
	watchlifeDevice,
}: BpmChartProps) => {
	const [series, setSeries] = useState<SeriesProps>({} as SeriesProps);
	const [bpmValue, setBpmValue] = useState<number>(0);

	const optionsAndBpmName = {
		...options,
		title: {text: nameCharts.bpmName.full},
	};

	useLayoutEffect(() => {
		if (!isConnected) return;

		switch (tabIndex) {
			case 0:
				setSeries({
					name: nameCharts.bpmName.abbreviated,
					data: livesimpleDevice.variables[0].histories,
				});

				setBpmValue(livesimpleDevice.variables[0].value);
				break;
			case 1:
				setSeries({
					name: nameCharts.bpmName.abbreviated,
					data: healthyesDevice.variables[0].histories,
				});

				setBpmValue(healthyesDevice.variables[0].value);
				break;
			case 2:
				setSeries({
					name: nameCharts.bpmName.abbreviated,
					data: watchlifeDevice.variables[0].histories,
				});

				setBpmValue(watchlifeDevice.variables[0].value);
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
				<VStack>
					<ReactApexChart
						options={optionsAndBpmName}
						series={[series]}
						type="line"
						height="200"
						width="400"
					/>

					<HeartBpm bpmValue={bpmValue} />
				</VStack>
			) : (
				<NoData bg="rgba(213,68,96,0.3)">
					Gráfico
					<Text as="strong" px="1" color="proiot.heart">
						BPM
					</Text>
					Está sem dados para serem Visualizados
				</NoData>
			)}
		</>
	);
};

export default BpmChart;
