import {useEffect, useState, lazy, Suspense} from "react";
import {Stack} from "@chakra-ui/react";
import {useSocketCharts} from "../../hooks/useSocketCharts";
// import {io} from "socket.io-client";

const BpmAndSpo = lazy(() => import("./BpmAndSpo"));
const BpmChart = lazy(() => import("./BpmChart"));
const SpoChart = lazy(() => import("./SpoChart"));

export const Charts = () => {
	const {bpmData} = useSocketCharts({
		host: "http://localhost:7000",
		isConnect: true,
	});

	console.log(bpmData);

	return (
		<Stack
			w="90%"
			justify="space-between"
			direction={{base: "column", lg: "row"}}>
			<Suspense fallback={<div>Loading...</div>}>
				<BpmAndSpo />
				<BpmChart /* bpmData={bpmData} bpmName={nameCharts.bpmName} */
				/>
				<SpoChart /* spoData={spoData} spoName={nameCharts.spoName} */
				/>
			</Suspense>
		</Stack>
	);
};
