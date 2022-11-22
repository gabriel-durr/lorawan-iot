import ReactApexChart from "react-apexcharts";
import {useState, useLayoutEffect} from "react";
import {ApexOptions} from "apexcharts";

// type bpmDataProps = {
// 	highDevice: number[];
// 	lowDevice: number[];
// 	mediumDevice: number[];
// };
// type bpmNameProps = {
// 	abbreviated: string;
// 	full: string;
// };

// type dataDataProps = {
// 	bpmData: bpmDataProps;
// 	bpmName: bpmNameProps;
// };

// type dataSeries = number[];

const BpmChart = ({}) => {
	// const [data, setData] = useState<dataSeries>([]);

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
		<ReactApexChart
			options={options}
			series={[{name: "", data: []}]}
			type="line"
			height="200"
			width="400"
		/>
	);
};

export default BpmChart;
