import {Badge} from "@chakra-ui/react";

type FeedbackActivationProps = {
	isConnect: boolean;
};

export const FeedbackActivation = ({isConnect}: FeedbackActivationProps) => {
	const textVariaton = isConnect ? "Conexão Ativa" : "Conexão Interrompida";

	const colorVariation = isConnect ? "green" : "red";

	return (
		<Badge pos="absolute" left="0%" colorScheme={colorVariation}>
			{textVariaton}
		</Badge>
	);
};
