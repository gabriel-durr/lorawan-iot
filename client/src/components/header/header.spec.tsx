import {render, screen} from "../../utils/test-utils";
import {Header} from "./index";

describe("Header", () => {
	test("should render the component", () => {
		const {debug} = render(<Header />);
		debug();

		expect(screen.getByTestId("testind-header")).toBeInTheDocument();
	});
});
