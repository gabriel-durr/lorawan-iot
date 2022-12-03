import {Flex, Text, Image, FlexProps} from "@chakra-ui/react";
import {ReactNode} from "react";
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
			minW="280px"
			h={{base: "300px", md: "340px", lg: "380px"}}
			align="center"
			bg={bg}
			shadow="md"
			border={`1px solid ${bg}`}
			backdropFilter="blur(2px)"
			{...rest}>
			<Image src={warning} w={{base: "170px", md: "200px"}} />
			<Text
				color="#fff"
				textAlign="center"
				fontSize={{base: "0.88rem", md: "1.1rem"}}>
				{children}
			</Text>
		</Flex>
	);
};
