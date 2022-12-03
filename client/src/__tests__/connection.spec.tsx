import React from "react";

import {renderHook} from "@testing-library/react-hooks";
import {ChakraProvider} from "@chakra-ui/react";
import {WebSocketProvider} from "../contexts/web-socket-contex";
import {useSocketCharts} from "../hooks/use-socket-charts";

import {theme} from "../theme";

type Props = {
	children: React.ReactNode;
};

const Provider = ({children}: Props) => (
	<ChakraProvider theme={theme}>
		<WebSocketProvider>{children}</WebSocketProvider>
	</ChakraProvider>
);

describe("Color mode Component", () => {
	it("should render the component", async () => {
		const {result} = renderHook(
			() => useSocketCharts({host: "localhost:700", isConnect: true}),
			{
				wrapper: Provider,
			}
		);

		expect(result.current.isConnected).not.toBeTruthy();
	});
});
