import {ColorModeSwitcher} from ".";

import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {App} from "../../App";

describe("color mode switcher", () => {
	it("Toggle Switcher render correctly", () => {
		// const {getByTestId} = render(<ColorModeSwitcher />);
		render(<App />);

		// expect(getByTestId("button-switcher")).toBeInTheDocument();
		expect(screen.getAllByTestId("dashboard")).toBeInTheDocument();
	});
});

// test("Toggle changes from light to dark mode", async () => {
//     render(<App />);
//     render(<ColorModeSwitcher />);
//     const dashboardBackground = screen.getByTestId("dashboard");

//     const themeToggler = screen.getByTestId("button-switcher");

//     expect(themeToggler).toBeInTheDocument();
//     expect(dashboardBackground).toHaveStyle(
//         "background-color: rga(255, 255, 255, 0.64)"
//     );
//     await userEvent.click(themeToggler);
//     expect(dashboardBackground).toHaveStyle("background-color: #1a202c");
// });
