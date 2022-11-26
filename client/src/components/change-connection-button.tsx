import {Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";

type ChangeConnectionButtonProps = {
	isConnect: boolean;
	handleActiveConnection: () => void;
};

export const ChangeConnectionButton = ({
	isConnect,
	handleActiveConnection,
}: ChangeConnectionButtonProps) => {
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
			boxShadow={{
				base: "1px 1px 1px 1px #acddfb",
				md: "2px 2px 1px 2px #acddfb",
			}}
			color="gray.800"
			fontSize={{base: "0.78rem", md: "0.9rem", lg: "0.94rem"}}
			w={{base: "8.25rem", md: "9.875rem", lg: "10rem"}}
			textAlign="center"
			h={{base: "1.75rem", md: "2rem", lg: "2.125rem"}}
			bg="proiot.blue.200"
			variant="ghost"
			onClick={handleActiveConnection}>
			{textButton}
		</Button>
	);
};
