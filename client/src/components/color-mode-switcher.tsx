import {useColorMode, useColorModeValue, Button, Image} from "@chakra-ui/react";
import darkTheme from "../assets/dark-theme.svg";
import lighTheme from "../assets/ligh-theme.svg";

export const ColorModeSwitcher = () => {
	const {toggleColorMode} = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(darkTheme, lighTheme);

	return (
		<Button
			size="sm"
			fontSize="lg"
			variant="ghost"
			colorScheme="gray"
			marginLeft="2"
			onClick={toggleColorMode}
			aria-label={`Switch to ${text} mode`}>
			<Image
				boxSize="100%"
				alt={`color mode: ${text}`}
				src={SwitchIcon}
			/>
		</Button>
	);
};
