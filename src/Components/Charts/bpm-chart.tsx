import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

import {useState, useLayoutEffect} from "react";
import {Text} from "@chakra-ui/react";

import {NoData} from "../no-data";

import {NameChartsProps, DevicePropsProps} from "./types/types-charts";

type BpmChartProps = {
	isConnected: boolean;
	nameCharts: NameChartsProps;
	livesimpleDevice: DevicePropsProps;
	healthyesDevice: DevicePropsProps;
	watchlifeDevice: DevicePropsProps;
};

const BpmChart = ({
	isConnected,
	nameCharts,
	livesimpleDevice,
	healthyesDevice,
	watchlifeDevice,
}: BpmChartProps) => {
	// const [data, setData] = useState<dataSeries>([]);

	console.log(livesimpleDevice);

	// useLayoutEffect(() => {
	// 	const {lowDevice} = bpmData;
	// 	setData(lowDevice);
	// }, [bpmData]);

	// const series = [{name: bpmName.abbreviated, data: data}];

	const options: ApexOptions = {
		chart: {
			height: 70,
			type: "line",
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "stepline",
			colors: ["#f10000b7"],
		},
		title: {
			text: "Beat Per Minute",
			align: "left",
		},
		grid: {
			row: {
				colors: ["#911a1a4f", "transparent"], // takes an array which will be repeated on columns
				opacity: 0.2,
			},
		},
		xaxis: {
			categories: [
				"1 min",
				"2 ",
				"3 ",
				"4 ",
				"5 ",
				"6 ",
				"7 ",
				"8 ",
				"9 ",
				"10 min",
			],
		},
	};

	return (
		<>
			{isConnected ? (
				<ReactApexChart
					options={options}
					series={[{name: "", data: []}]}
					type="line"
					height="200"
					width="400"
				/>
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
