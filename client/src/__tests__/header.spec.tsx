import {render, screen} from "@testing-library/react";
import {Header} from "../components/header";

describe("Header", () => {
	it("should render the component", () => {
		render(<Header />);

		expect(screen.getByAltText("ProIoT Logo")).toBeInTheDocument();
	});
});
