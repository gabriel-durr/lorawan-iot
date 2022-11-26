import ReactApexChart from "react-apexcharts";
import {options} from "./options-bpm-and-spo";

import {NameChartsProps, DevicePropsProps} from "./../types/types-charts";
import {NoData} from "../../no-data";

import {useState, useEffect} from "react";
import {Text, Box} from "@chakra-ui/react";

type BpmAndSpoProps = {
	tabIndex: number;
	isConnected: boolean;
	nameCharts: NameChartsProps;
	livesimpleDevice: DevicePropsProps;
	healthyesDevice: DevicePropsProps;
	watchlifeDevice: DevicePropsProps;
};

type SeriesPropsUnity = {
	name: string;
	data: number[];
};

type SeriesProps = SeriesPropsUnity;

const BpmAndSpo = ({
	tabIndex,
	isConnected,
	nameCharts,
	livesimpleDevice,
	healthyesDevice,
	watchlifeDevice,
}: BpmAndSpoProps) => {
	const [series, setSeries] = useState<SeriesProps[]>([]);

	useEffect(() => {
		if (!isConnected) return;

		switch (tabIndex) {
			case 0:
				setSeries([
					{
						name: nameCharts.bpmName.abbreviated,
						data: livesimpleDevice.variables[0].histories,
					},
					{
						name: nameCharts.spoName.abbreviated,
						data: livesimpleDevice.variables[1].histories,
					},
				]);
				break;
			case 1:
				setSeries([
					{
						name: nameCharts.bpmName.abbreviated,
						data: healthyesDevice.variables[0].histories,
					},
					{
						name: nameCharts.spoName.abbreviated,
						data: healthyesDevice.variables[1].histories,
					},
				]);
				break;
			case 2:
				setSeries([
					{
						name: nameCharts.bpmName.abbreviated,
						data: watchlifeDevice.variables[0].histories,
					},
					{
						name: nameCharts.spoName.abbreviated,
						data: watchlifeDevice.variables[1].histories,
					},
				]);
				break;
		}
	}, [
		isConnected,
		livesimpleDevice.variables,
		nameCharts.bpmName.abbreviated,
		nameCharts.spoName.abbreviated,
		healthyesDevice.variables,
		watchlifeDevice.variables,
		tabIndex,
	]);

	return (
		<>
			{isConnected ? (
				<Box
					w={{base: "100%", md: "70%", lg: "40%"}}
					h={{base: "450px", md: "480px", lg: "420px"}}
					bg="#fff"
					p={["7px", "10px"]}
					shadow="lg">
					<ReactApexChart
						height="100%"
						series={series}
						options={options}
					/>
				</Box>
			) : (
				<NoData bg="rgba(106,81,255,0.3)">
					Gráfico
					<Text as="strong" px="1" color="proiot.purple.900">
						Principal
					</Text>
					Está sem dados para serem Visualizados
				</NoData>
			)}
		</>
	);
};

export default BpmAndSpo;
