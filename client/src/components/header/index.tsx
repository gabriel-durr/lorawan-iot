import {Flex, Image, useColorModeValue} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../color-mode-switcher";
import LogoOriginal from "../../assets/proiot-horizontal.png";
import LogoWhite from "../../assets/proiot-horizontal-white.png";

export const Header = () => {
	return (
		<Flex
			as="header"
			data-testid="testind-header"
			w="100vw"
			h="92px"
			bg="proiot.blue.800"
			shadow="xs"
			align="center"
			px="44.5px"
			pr="74px"
			justify="space-between">
			<Image
				as="img"
				src={useColorModeValue(LogoOriginal, LogoWhite)}
				alt="ProIoT Logo"
				h={useColorModeValue("38px", "30px")}
				rounded="sm"
			/>
			<ColorModeSwitcher />
		</Flex>
	);
};
