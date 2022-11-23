import {Flex, Image} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../color-mode-switcher";
import Logo from "../../assets/proiot-horizontal.png";

export const Header = () => {
	return (
		<Flex
			as="header"
			pos="fixed"
			w="100vw"
			h="96px"
			align="center"
			px="44.5px"
			pr="74px"
			justify="space-between">
			<Image
				as="img"
				src={Logo}
				alt="ProIoT Logo"
				h="40px"
				bg="#fff"
				rounded="sm"
			/>
			<ColorModeSwitcher />
		</Flex>
	);
};
