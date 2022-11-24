import React, {createContext, useState, useEffect} from "react";
import {io, Socket} from "socket.io-client";

type IoInitial = Socket;

export type VariablesDevice = {
	histories: number[];
	unit: string;
	value: number;
	variable_name: string;
	_id: string;
};

type DeviceProps = {
	device_name: string;
	variables: VariablesDevice[];
	_id: string;
};

type WSDataProps = DeviceProps[];

type IdSocket = string;
type ErrorSocket = Error | null;

type ConnectConfig = {
	host: string;
	isConnect: boolean;
};

type PropsWebSocketContext = {
	setConnectConfig: (param: ConnectConfig) => void;
	wsData: WSDataProps;
	idSocket: IdSocket;
	error: ErrorSocket;
};

const WebSocketContex = createContext<PropsWebSocketContext>(
	{} as PropsWebSocketContext
);

const WebSocketProvider = ({children}: React.PropsWithChildren<{}>) => {
	const [idSocket, setIdSocket] = useState<IdSocket>("");
	const [error, setError] = useState<ErrorSocket>(null);
	const [wsData, setWsData] = useState<WSDataProps>([]);

	const [connectConfig, setConnectConfig] = useState<ConnectConfig>({
		isConnect: false,
		host: "",
	});

	useEffect(() => {
		const isHaveHost = connectConfig?.host ? true : false;

		if (!isHaveHost) return;
		const socket: IoInitial = io(connectConfig.host);

		if (connectConfig.isConnect && isHaveHost) {
			socket.on("connect", () =>
				setIdSocket(`socket connected id: ${socket.id}`)
			);

			socket.on("connect_error", err => {
				setError(err);
				setTimeout(() => socket.connect(), 5000);
			});
			socket.on("data", data => {
				setWsData(data.device);
			});
		} else {
			socket.emit("socket disconnect", true);
		}
	}, [connectConfig.host, connectConfig.isConnect, setConnectConfig]);

	return (
		<WebSocketContex.Provider
			value={{
				setConnectConfig,
				wsData,
				idSocket,
				error,
			}}>
			{children}
		</WebSocketContex.Provider>
	);
};

export {WebSocketProvider, WebSocketContex};
