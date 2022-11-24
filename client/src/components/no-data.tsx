import {
	Flex,
	Text,
	Image,
	FlexProps,
	HTMLChakraComponents,
} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import warning from "../assets/warning-error.svg";

interface NoDataProps extends FlexProps {
	children: ReactNode;
	bg?: string;
}

export const NoData = ({children, bg, ...rest}: NoDataProps) => {
	return (
		<Flex
			justify="center"
			direction="column"
			p={{base: "8px", md: "16px", lg: "22px"}}
			gap="4"
			boxSize="100%"
			align="center"
			bg={bg}
			shadow="md"
			border={`1px solid ${bg}`}
			backdropFilter="blur(2px)"
			{...rest}>
			<Image src={warning} w="200px" />
			<Text
				color="#fff"
				textAlign="center"
				fontSize={{base: "1.1rem", md: "1.7rem"}}>
				{children}
			</Text>
		</Flex>
	);
};
