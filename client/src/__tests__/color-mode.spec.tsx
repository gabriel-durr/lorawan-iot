import {theme} from "../theme";
import {ColorModeSwitcher} from "../components/color-mode-switcher";

import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import {ChakraProvider} from "@chakra-ui/react";

type Props = {
	children: React.ReactNode;
};

const Provider = ({children}: Props) => (
	<ChakraProvider theme={theme}>{children}</ChakraProvider>
);

describe("Color mode Component", () => {
	it("should render the component", async () => {
		render(<ColorModeSwitcher />, {
			wrapper: Provider,
		});

		const colorSwitcher = screen.getByTestId("button-switcher");
		await userEvent.hover(colorSwitcher);

		expect(colorSwitcher).toHaveAttribute("box-shadow");
	});
});
