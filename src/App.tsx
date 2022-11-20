import {Box, Heading, Text} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./Components/ColorModeSwitcher";

export const App = () => (
	<Box>
		<Heading>Challenge ProIoT</Heading>
		<Text>
			WWW Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Possimus exercitationem rerum cumque voluptatum molestias corporis
			quasi voluptas odio sequi dolore porro molestiae, quisquam
			voluptates quia unde voluptatibus maxime eius ducimus!
		</Text>
		<ColorModeSwitcher justifySelf="flex-end" />
	</Box>
);
