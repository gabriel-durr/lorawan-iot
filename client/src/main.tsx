import "@fontsource/raleway";
import "@fontsource/open-sans";

import {ColorModeScript} from "@chakra-ui/react";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Header} from "./components/header";

import {theme} from "./theme";
import {ChakraProvider} from "@chakra-ui/react";
import {WebSocketProvider} from "./contexts/web-socket-contex";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
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
