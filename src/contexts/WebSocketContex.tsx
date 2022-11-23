import React, {createContext, useState, useEffect} from "react";
import {io, Socket} from "socket.io-client";

type IoInitial = Socket;

type WSDataProps = {
	highDevice: number[];
	lowDevice: number[];
	mediumDevice: number[];
};

type IdSocket = string;
type ErrorSocket = Error | null;

type ConnectConfig = {
	host: string;
	isConnect: boolean;
};

type PropsWebSocketContext = {
	setConnectConfig: (param: ConnectConfig) => void;
	idSocket: IdSocket;
	error: ErrorSocket;
	bpmData: WSDataProps;
	spoData: WSDataProps;
};

const WebSocketContex = createContext<PropsWebSocketContext>(
	{} as PropsWebSocketContext
);

const WebSocketProvider = ({children}: React.PropsWithChildren<{}>) => {
	const [connectConfig, setConnectConfig] = useState<ConnectConfig>({
		isConnect: false,
		host: "",
	});
	const [bpmData, setBpmData] = useState<WSDataProps>({} as WSDataProps);
	const [spoData, setSpoData] = useState<WSDataProps>({} as WSDataProps);
	const [idSocket, setIdSocket] = useState<IdSocket>("");
	const [error, setError] = useState<ErrorSocket>(null);

	useEffect(() => {
		if (connectConfig.host?.length) {
			const socket: IoInitial = io(connectConfig.host);

			if (connectConfig.isConnect) {
				socket.on("connect", () =>
					setIdSocket(`socket connected id: ${socket.id}`)
				);

				socket.on("connect_error", err => {
					setError(err);
					setTimeout(() => socket.connect(), 5000);
				});
				socket.on("data", data => {
					setBpmData(data.bpm);
					setSpoData(data.spo);
				});
			} else {
				socket.emit("socket disconnect", true);
			}
		}
	}, [connectConfig.host, connectConfig.isConnect, setConnectConfig]);

	return (
		<WebSocketContex.Provider
			value={{
				setConnectConfig,
				idSocket,
				error,
				bpmData,
				spoData,
			}}>
			{children}
		</WebSocketContex.Provider>
	);
};

export {WebSocketProvider, WebSocketContex};
