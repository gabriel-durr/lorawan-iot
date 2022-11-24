import {motion} from "framer-motion";
import heart from "../assets/heart.svg";

import {Box, Image, Text} from "@chakra-ui/react";

type HeartBpmProps = {
	bpmValue: number;
};

export const HeartBpm = ({bpmValue}: HeartBpmProps) => {
	const variants = {
		show: {
			opacity: 1,
			scale: 1.05,
			transition: {
				duration: 0.9,
				yoyo: Infinity,
			},
		},
	};

	return (
		<Box
			as={motion.div}
			variants={variants}
			boxSize={{base: "62px", md: "72px", lg: "134px"}}
			animate="show">
			<Text fontWeight="bold" fontSize="1.3rem">
				{bpmValue}
				<Text px="3px" as="span" color="red.400">
					PR
				</Text>
			</Text>

			<Image alt="heart animation chart" src={heart} boxSize="100%" />
		</Box>
	);
};
