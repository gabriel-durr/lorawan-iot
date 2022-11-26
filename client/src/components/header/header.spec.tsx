import {render, screen} from "@testing-library/react";
import {Header} from ".";

describe("Header", () => {
	test("should render the component", () => {
		const {debug} = render(<Header />);
		debug();

		expect(screen.getByTestId("testind-header")).toBeInTheDocument();
	});
});
