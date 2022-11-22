import React from "react";
import {Flex, Heading, Text} from "@chakra-ui/react";
import {Charts} from "./Components/Charts";

export const App = () => (
	<Flex gap="2" pt="150px" w="container.xl" m="auto" direction="column">
		<Heading>Challenge ProIoT</Heading>
		<Text>
			WWW Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Possimus exercitationem rerum cumque voluptatum molestias corporis
			quasi voluptas odio sequi dolore porro molestiae, quisquam
			voluptates quia unde voluptatibus maxime eius ducimus!
		</Text>

		<Charts />
	</Flex>
);
