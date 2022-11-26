import {ApexOptions} from "apexcharts";
export const options: ApexOptions = {
	chart: {
		height: 350,
		type: "line",
		background: "#fff",
		dropShadow: {
			enabled: true,
			color: "#4d57c4b8",
			top: 17,
			left: 7,
			blur: 10,
			opacity: 0.6,
		},
		toolbar: {
			show: true,
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
			colors: ["#4018e027", "transparent"], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
	},
	markers: {
		size: 1,
	},
	xaxis: {
		categories: ["1 min", "2", "3", "4", "5", "6", "7", "8", "9", "10 min"],
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
		max: 140,
	},

	legend: {
		position: "top",
		horizontalAlign: "right",
		floating: true,
		offsetY: -25,
		offsetX: -5,
	},
};
