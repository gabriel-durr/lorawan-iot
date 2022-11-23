import {ApexOptions} from "apexcharts";

export const options: ApexOptions = {
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
		curve: "straight",
		dashArray: [0, 3, 0, 3, 0, 3],
		width: [3, 2, 3, 2, 3, 2],
		colors: ["#165ac7", "#165ac7"],
	},
	title: {
		text: "",
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
