import {Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";

type ButtonDisableProps = {
	isConnect: boolean;
	handleActiveConnection: () => void;
};

export const ButtonDisable = ({
	isConnect,
	handleActiveConnection,
}: ButtonDisableProps) => {
	const textButton = isConnect ? "Desativar Conexão" : "Ativar Conexão";
	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsloading(true);
			await new Promise(resolve => setTimeout(resolve, 800));
			setIsloading(false);
		})();
	}, [isConnect]);

	return (
		<Button
			isLoading={isLoading}
			boxShadow="2px 2px 1px 2px #acddfb"
			color="gray.800"
			w="192px"
			bg="proiot.blue.200"
			variant="ghost"
			onClick={handleActiveConnection}>
			{textButton}
		</Button>
	);
};
