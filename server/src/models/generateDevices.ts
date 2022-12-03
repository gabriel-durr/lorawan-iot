import {generateBpm} from "../utils/generateBpm";
import {generateSpo} from "../utils/generateSpo";

type GenerateDevices = object[];

const generateDevices = (): GenerateDevices => {
	const bpmType = {
		lowDevice: generateBpm("lowDeviceBpm"),
		mediumDevice: generateBpm("mediumDeviceBpm"),
		highDevice: generateBpm("highDeviceBpm"),
	};

	const spoType = {
		lowDevice: generateSpo("lowDeviceSpo"),
		mediumDevice: generateSpo("mediumDeviceSpo"),
		highDevice: generateSpo("highDeviceSpo"),
	};

	return [
		{
			_id: "d_1",
			device_name: "watch life",
			variables: [
				{
					_id: "v_1",
					variable_name: "BPM",
					value: bpmType.lowDevice?.uniqueValue,
					unit: "PR",
					histories: bpmType.lowDevice?.historyData,
				},
				{
					_id: "v_2",
					variable_name: "SpO2",
					value: spoType.lowDevice?.uniqueValue,
					unit: "%",
					histories: spoType.lowDevice?.historyData,
				},
			],
		},

		{
			_id: "d_2",
			device_name: "Live Simple",
			variables: [
				{
					_id: "v_1",
					variable_name: "BPM",
					value: bpmType.mediumDevice?.uniqueValue,
					unit: "PR",
					histories: bpmType.mediumDevice?.historyData,
				},
				{
					_id: "v_2",
					variable_name: "SpO2",
					value: spoType.mediumDevice?.uniqueValue,
					unit: "%",
					histories: spoType.mediumDevice?.historyData,
				},
			],
		},

		{
			_id: "d_3",
			device_name: "Health Yes",
			variables: [
				{
					_id: "v_1",
					variable_name: "BPM",
					value: bpmType.highDevice?.uniqueValue,
					unit: "PR",
					histories: bpmType.highDevice?.historyData,
				},
				{
					_id: "v_2",
					variable_name: "SpO2",
					value: spoType.highDevice?.uniqueValue,
					unit: "%",
					histories: spoType.highDevice?.historyData,
				},
			],
		},
	];
};

export {generateDevices};
