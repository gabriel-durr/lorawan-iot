import {theme} from "./theme";
import App from "./App";
import {WebSocketProvider} from "./contexts/web-socket-contex";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/raleway";
import "@fontsource/open-sans";

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import {ColorModeScript, ChakraProvider} from "@chakra-ui/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<WebSocketProvider>
				<App />
			</WebSocketProvider>
		</ChakraProvider>
	</StrictMode>
);

reportWebVitals();
