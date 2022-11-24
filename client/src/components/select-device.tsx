import Watchlife from "../assets/device-1.png";
import LiveSimple from "../assets/device-2.png";
import HealthYes from "../assets/device-3.png";

import {
	useColorModeValue,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Tabs,
	Image,
	Text,
} from "@chakra-ui/react";

type SelectDeviceProps = {
	tabIndex: number;
	setTabIndex: (value: number) => void;
};

export const SelectDevice = ({tabIndex, setTabIndex}: SelectDeviceProps) => {
	const colors = useColorModeValue(
		["#a76dce27", "teal.50", "red.50"],
		["proiot.purple.900", "proiot.blue.800", "proiot.pink"]
	);

	const bg = colors[tabIndex];
	return (
		<Tabs
			w={{base: "100%", md: "520px"}}
			h={{base: "270px", md: "150px", lg: "130px"}}
			shadow="md"
			onChange={index => setTabIndex(index)}
			bg={bg}>
			<TabList flexDir={{base: "column", md: "row"}}>
				<Tab>Device: Watch life</Tab>
				<Tab>Device: Live Simple</Tab>
				<Tab>Device: Health Yes</Tab>
			</TabList>
			<TabPanels px="1rem">
				<TabPanel display="flex" flexDir="row" gap="4">
					<Image
						src={Watchlife}
						alt="Device Watchlife"
						w={{base: "34px", md: "38px"}}
						h="54px"
					/>
					<Text>
						you are viewing the information (BPM and SpO2) of the
						device <Text as="strong">Watch life</Text>
					</Text>
				</TabPanel>
				<TabPanel display="flex" flexDir="row" gap="4">
					<Image
						src={LiveSimple}
						alt="Device LiveSimple"
						w="68px"
						h="52px"
					/>
					<Text>
						you are viewing the information (BPM and SpO2) of the
						device <Text as="strong">Live Simple</Text>
					</Text>
				</TabPanel>
				<TabPanel display="flex" flexDir="row" gap="4">
					<Text>
						you are viewing the information (BPM and SpO2) of the
						device <Text as="strong">Health Yes</Text>
					</Text>
					<Image
						src={HealthYes}
						alt="Device HealthYes"
						boxSize="50px"
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};
