import {render, screen, userEvent} from "../../utils/test-utils";
import {ColorModeSwitcher} from "./index";

describe("Button color mode", () => {
	it("should be alternating colors", () => {
		const {getByTestId} = render(<ColorModeSwitcher />);

		expect(getByTestId("button-switcher")).toBeInTheDocument();
	});
});
