import "@fontsource/raleway";
import "@fontsource/open-sans";

import {ColorModeScript} from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {App} from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./theme";
import {Header} from "./components/header";
import {WebSocketProvider} from "./contexts/web-socket-contex";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<WebSocketProvider>
				<Header />
				<App />
			</WebSocketProvider>
		</ChakraProvider>
	</React.StrictMode>
);
