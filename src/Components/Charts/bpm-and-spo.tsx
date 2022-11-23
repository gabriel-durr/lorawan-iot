import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {NameChartsProps, DevicePropsProps} from "./types/types-charts";

import React, {useState} from "react";
import {Text} from "@chakra-ui/react";

import {NoData} from "../no-data";

type BpmAndSpoProps = {
	isConnected: boolean;
	nameCharts: NameChartsProps;
	livesimpleDevice: DevicePropsProps;
	healthyesDevice: DevicePropsProps;
	watchlifeDevice: DevicePropsProps;
};

const BpmAndSpo = ({isConnected, livesimpleDevice}: BpmAndSpoProps) => {
	const [series, setSeries] = useState([
		{
			name: "BPM",
			data: [28, 29, 33, 36, 32, 32, 33],
		},
		{
			name: "SPO2",
			data: [12, 11, 14, 18, 17, 13, 13],
		},
	]);
	const options: ApexOptions = {
		chart: {
			height: 350,
			type: "line",
			dropShadow: {
				enabled: true,
				color: "#4d57c4b8",
				top: 17,
				left: 7,
				blur: 10,
				opacity: 0.6,
			},
			toolbar: {
				show: false,
			},
		},
		colors: ["#f10000b7", "#0014f19e"],

		dataLabels: {
			enabled: true,
			background: {
				opacity: 0.5,
				borderColor: "#07ffe2",
				borderRadius: 5,
				padding: 7,
				foreColor: "#efefef",
			},
		},
		stroke: {
			curve: "smooth",
			colors: ["#f10000b7", "#0014f19e"],
		},
		title: {
			text: "BPM & SPO2",
			align: "left",
		},
		grid: {
			borderColor: "#dfdfdf",
			row: {
				colors: ["#c6bbf478", "transparent"], // takes an array which will be repeated on columns
				opacity: 0.5,
			},
		},
		markers: {
			size: 1,
		},
		xaxis: {
			categories: ["1 min", "2", "3", "4", "5", "6", "7 min"],
			title: {
				text: "Minutos",
			},
		},
		yaxis: {
			title: {
				text: "Variações de BPM e SpO2",
				offsetX: -10,
				style: {
					color: "#00f1fe",
					fontSize: "1.05rem",
					fontFamily: "Open Sans",
				},
			},
			min: 0,
			max: 100,
		},

		legend: {
			position: "top",
			horizontalAlign: "right",
			floating: true,
			offsetY: -25,
			offsetX: -5,
		},
	};

	return (
		<>
			{isConnected ? (
				<ReactApexChart
					series={series}
					options={options}
					type="line"
					height="450"
					width="500"
				/>
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
