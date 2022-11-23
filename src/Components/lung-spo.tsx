import {motion} from "framer-motion";
import lung from "../assets/lung.svg";

import {Box, Image, Text} from "@chakra-ui/react";

type SpoValue = {
	spoValue: number;
};

export const LungSpo = ({spoValue}: SpoValue) => {
	const variants = {
		show: {
			opacity: 1,
			scale: 1.09,
			transition: {
				duration: 7,
				yoyo: Infinity,
			},
		},
	};

	return (
		<Box as={motion.div} variants={variants} boxSize="134px" animate="show">
			<Text fontWeight="bold" fontSize="1.3rem">
				{spoValue}
				<Text px="3px" as="span" color="green.400">
					%
				</Text>
			</Text>

			<Image alt="lung animation chart" src={lung} boxSize="100%" />
		</Box>
	);
};
