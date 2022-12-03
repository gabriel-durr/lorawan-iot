import {Spinner as SpinnerComponent} from "@chakra-ui/react";

export const Spinner = () => {
	return (
		<SpinnerComponent
			thickness="10px"
			m="14% auto"
			speed="0.65s"
			emptyColor="gray.200"
			color="blue.300"
			size={{base: "lg", md: "xl"}}
		/>
	);
};
