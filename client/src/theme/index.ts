import {extendTheme, type ThemeConfig} from "@chakra-ui/react";
import type {StyleFunctionProps} from "@chakra-ui/styled-system";
import {mode} from "@chakra-ui/theme-tools";

const styles = {
	global: (props: StyleFunctionProps) => ({
		body: {
			color: mode("gray.800", "whiteAlpha.900")(props),
			bg: mode("whiteAlpha.700", "gray.800")(props),
		},
	}),
};

const colors = {
	proiot: {
		pink: "#c938fe",
		purple: {
			900: "#6a51ff",
			800: "#8249ff",
		},
		heart: "#d54460",
		blue: {
			900: "#005ac9",
			800: "#4460d5",
			700: "#445eab",
			600: "#58b2de",
			500: "#4378a2",
			400: "#79c2e1",
			300: "#b9effa",
			200: "#e8f9ff",
		},
	},
};

const fonts = {
	heading: `'Raleway', sans-serif`,
	body: `'Open Sans', sans-serif`,
};

const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: "light",
};

export const theme = extendTheme({styles, colors, fonts, config});
