import {useState, useContext, useEffect} from "react";
import {WebSocketContex, VariablesDevice} from "../contexts/web-socket-contex";

type ConnectedSockets = boolean;

type DeviceProps = {
	device_name: string;
	variables: VariablesDevice[];
	_id: string;
};

type ConnectConfig = {
	host: string;
	isConnect: boolean;
};

type BpmNameAndSpoProps = {abbreviated: string; full: string};

type NameCharts = {
	bpmName: BpmNameAndSpoProps;
	spoName: BpmNameAndSpoProps;
};

export const useSocketCharts = ({isConnect, host}: ConnectConfig) => {
	const [isConnected, setIsConnected] = useState<ConnectedSockets>(false);
	const [watchlifeDevice, setWatchlifeDevice] = useState<DeviceProps>(
		{} as DeviceProps
	);
	const [livesimpleDevice, setLivesimpleDevice] = useState<DeviceProps>(
		{} as DeviceProps
	);
	const [healthyesDevice, setHealthyesDevice] = useState<DeviceProps>(
		{} as DeviceProps
	);

	const {setConnectConfig, wsData, idSocket, error} =
		useContext(WebSocketContex);

	useEffect(() => {
		const hasWsData = !!wsData?.length;

		if (isConnect && hasWsData) {
			const {...watchLifeDeviceData} = wsData[0];
			const {...liveSimpleDeviceData} = wsData[1];
			const {...healthYesDeviceData} = wsData[2];

			setIsConnected(true);
			setWatchlifeDevice(watchLifeDeviceData);
			setLivesimpleDevice(liveSimpleDeviceData);
			setHealthyesDevice(healthYesDeviceData);
		} else {
			setIsConnected(false);
		}
		setConnectConfig({host, isConnect});
	}, [isConnect, host, wsData, setConnectConfig]);

	const nameCharts: NameCharts = {
		bpmName: {abbreviated: "BPM", full: "Beat Per Minute"},
		spoName: {
			abbreviated: "SpO2",
			full: "Pulse oximeter oxygen saturation",
		},
	};

	return {
		isConnected,
		nameCharts,
		watchlifeDevice,
		livesimpleDevice,
		healthyesDevice,
		idSocket,
		error,
	};
};
