import {io} from "./http";
import {generateDevices} from "./models/generateDevices";

type TenSecondsIntervalEmit = number;

const tenSecondsIntervalEmit: TenSecondsIntervalEmit = 10000;

io.on("connection", socket => {
	console.log("client connected:", socket.id);

	socket.on("socket disconnect", (value: boolean) => {
		if (value) {
			io.disconnectSockets(value);
		}
	});

	setInterval(() => {
		socket.emit("data", {
			device: generateDevices(),
		});
	}, tenSecondsIntervalEmit);
});
