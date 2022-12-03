import {betweenValues} from "./betweenValues";

type lowDeviceSpo = number[];
type mediumDeviceSpo = number[];
type highDeviceSpo = number[];

var lowDeviceData: lowDeviceSpo = [];
var mediumDeviceData: mediumDeviceSpo = [];
var highDeviceData: highDeviceSpo = [];

// var Atual Value (variável vai receber apenas valor atual do random number)

function generateSpo(spoType: string) {
	switch (spoType) {
		case "lowDeviceSpo":
			const generateValuesLowDevice = betweenValues(98, 99);

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

		case "mediumDeviceSpo":
			const generateValuesMediumDevice = betweenValues(97, 100);

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

		case "highDeviceSpo":
			const generateValuesHighDevice = betweenValues(98, 100);

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

export {generateSpo};
