import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {NameChartsProps, DevicePropsProps} from "./types/types-charts";

import {useState, useLayoutEffect} from "react";
import {NoData} from "../no-data";

import {Text} from "@chakra-ui/react";

type SpoChartProps = {
	isConnected: boolean;
	nameCharts: NameChartsProps;
	livesimpleDevice: DevicePropsProps;
	healthyesDevice: DevicePropsProps;
	watchlifeDevice: DevicePropsProps;
};

const SpoChart = ({isConnected}: SpoChartProps) => {
	// const [data, setData] = useState<dataSeries>([]);

	// useLayoutEffect(() => {
	// 	const {lowDevice} = spoData;
	// 	setData(lowDevice);
	// }, [spoData]);

	// const series = [{name: spoName.abbreviated, data: data}];

	// 	<NoData bg="rgba(68,96,213,0.3)">
	// 	Gráfico
	// 	<Text as="strong" px="1" color="proiot.blue.800">
	// 		SpO2
	// 	</Text>
	// 	Está sem dados para serem Visualizados
	// </NoData>

	const options: ApexOptions = {
		chart: {
			height: 70,
			type: "line",
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: true,
		},
		stroke: {
			curve: "stepline",
			colors: ["#0040f1b7"],
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
				"10 min ",
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
