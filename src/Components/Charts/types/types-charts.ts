/**
 * nameCharts é um objeto que contém os nome abreviados e completos BPM ou SpO2
 */

type BpmAndSpoNameProps = {
	abbreviated: string;
	full: string;
};

type BpmNameAndSpo = {
	bpmName: BpmAndSpoNameProps;
	spoName: BpmAndSpoNameProps;
};

export type NameChartsProps = BpmNameAndSpo;

/**
 * Device é a estrutura geral do dispositivo recebida da API WebSockets
 *
 * Variables contém os dados BPM e SpO2 do dispositivo
 */

export type VariablesDevice = {
	histories: number[];
	unit: string;
	value: number;
	variable_name: string;
	_id: string;
};

export type DevicePropsProps = {
	device_name: string;
	variables: VariablesDevice[];
	_id: string;
};
