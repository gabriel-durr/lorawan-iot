import {useColorMode, useColorModeValue, Button, Image} from "@chakra-ui/react";
import darkTheme from "../assets/dark-theme.svg";
import lighTheme from "../assets/ligh-theme.svg";

export const ColorModeSwitcher = () => {
	const {toggleColorMode} = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(darkTheme, lighTheme);
	const SwitchColor = useColorModeValue("#2b046288", "#e2e60bd6");

	return (
		<Button
			size="md"
			fontSize="lg"
			variant="solid"
			_hover={{
				bg: "#fff",
				filter: "brightness(0.97)",
				transition: "box-shadow .4s ease ",
				boxShadow: `1px 1px 13px 0 ${SwitchColor}`,
			}}
			colorScheme="whiteAlpha"
			bg="#fff"
			marginLeft="2"
			onClick={toggleColorMode}
			aria-label={`Switch to ${text} mode`}>
			<Image boxSize="80%" alt={`color mode: ${text}`} src={SwitchIcon} />
		</Button>
	);
};
