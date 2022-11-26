import {betweenValues} from "./betweenValues";

type lowDeviceBpm = number[];
type mediumDeviceBpm = number[];
type highDeviceBpm = number[];

var lowDeviceData: lowDeviceBpm = [];
var mediumDeviceData: mediumDeviceBpm = [];
var highDeviceData: highDeviceBpm = [];

function generateBpm(bpmType: string) {
	switch (bpmType) {
		case "lowDeviceBpm":
			const generateValuesLowDevice = betweenValues(60, 67);

			if (lowDeviceData.length > 9) {
				lowDeviceData.splice(0, 1);
				lowDeviceData.push(generateValuesLowDevice);
			} else {
				lowDeviceData.push(generateValuesLowDevice);
			}

			return {
				historyData: lowDeviceData,
				uniqueValue: generateValuesLowDevice,
			};

		case "mediumDeviceBpm":
			const generateValuesMediumDevice = betweenValues(75, 84);

			if (mediumDeviceData.length > 9) {
				mediumDeviceData.splice(0, 1);
				mediumDeviceData.push(generateValuesMediumDevice);
			} else {
				mediumDeviceData.push(generateValuesMediumDevice);
			}

			return {
				historyData: mediumDeviceData,
				uniqueValue: generateValuesMediumDevice,
			};

		case "highDeviceBpm":
			const generateValuesHighDevice = betweenValues(90, 110);

			if (highDeviceData.length > 9) {
				highDeviceData.splice(0, 1);
				highDeviceData.push(generateValuesHighDevice);
			} else {
				highDeviceData.push(generateValuesHighDevice);
			}

			return {
				historyData: highDeviceData,
				uniqueValue: generateValuesHighDevice,
			};
	}
}

export {generateBpm};
