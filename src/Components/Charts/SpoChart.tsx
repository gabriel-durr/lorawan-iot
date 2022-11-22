import ReactApexChart from "react-apexcharts";
import {useState, useLayoutEffect} from "react";
import {ApexOptions} from "apexcharts";

// type spoDataProps = {
// 	highDevice: number[];
// 	lowDevice: number[];
// 	mediumDevice: number[];
// };
// type spoNameProps = {
// 	abbreviated: string;
// 	full: string;
// };

// type dataDataProps = {
// 	spoData: spoDataProps;  // type parametro props
// 	spoName: spoNameProps;
// };

// type dataSeries = number[];

const SpoChart = ({}) => {
	// const [data, setData] = useState<dataSeries>([]);

	// useLayoutEffect(() => {
	// 	const {lowDevice} = spoData;
	// 	setData(lowDevice);
	// }, [spoData]);

	// const series = [{name: spoName.abbreviated, data: data}];

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
		<ReactApexChart
			options={options}
			series={[{name: "", data: []}]}
			type="line"
			height="200"
			width="400"
		/>
	);
};

export default SpoChart;
