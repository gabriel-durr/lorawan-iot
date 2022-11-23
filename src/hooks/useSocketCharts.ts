import {useState, useContext, useEffect} from "react";
import {WebSocketContex} from "../contexts/WebSocketContex";

type ConnectedSockets = boolean;

type ConnectConfig = {
	host: string;
	isConnect: boolean;
};

type BpmName = {abbreviated: string; full: string};
type SpoName = {abbreviated: string; full: string};

type NameCharts = {
	bpmName: BpmName;
	spoName: SpoName;
};

export const useSocketCharts = ({isConnect, host}: ConnectConfig) => {
	const {setConnectConfig, idSocket, error, bpmData, spoData} =
		useContext(WebSocketContex);

	const [isConnected, setIsConnected] = useState<ConnectedSockets>(false);

	useEffect(() => {
		setConnectConfig({host, isConnect});

		if (isConnect) {
			setIsConnected(true);
		} else {
			setIsConnected(false);
		}
	}, [isConnect, host, setConnectConfig]);

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
		bpmData,
		spoData,
		idSocket,
		error,
	};
};
