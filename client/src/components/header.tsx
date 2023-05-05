import LogoLorawan from "../assets/lorawan.png";
import { ColorModeSwitcher } from "./color-mode-switcher";

import { Flex, Image } from "@chakra-ui/react";

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
			pr={{ base: "10px", md: "74px" }}
			justify="space-between"
		>
			<Image
				as="img"
				src={LogoLorawan}
				alt="LoraWan Logo"
				w="42px"
				rounded="sm"
			/>
			<ColorModeSwitcher />
		</Flex>
	);
};
