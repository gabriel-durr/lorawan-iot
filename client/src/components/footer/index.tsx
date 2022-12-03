import {Text, HStack} from "@chakra-ui/react";

export const Footer = () => {
	return (
		<HStack as="footer" w="100vw" justify="center">
			<Text fontSize={{base: "2xs", md: "xs"}} alignSelf="center">
				<Text as="strong">ProIoT Challenge</Text> 💟🤞 Developed and
				Designed by
				<Text px="5px" color="proiot.purple.800" as="span">
					Gabriel Dürr
				</Text>
			</Text>
		</HStack>
	);
};
