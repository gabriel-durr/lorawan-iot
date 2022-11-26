"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : {default: mod};
	};
Object.defineProperty(exports, "__esModule", {value: true});
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
const Server = (0, http_1.createServer)(app);
const io = require("socket.io")(Server, {
	cors: {
		origin: "http://localhost:3000",
	},
});
io.on("connection", socket => {
	console.log("client connected:", socket.id);
	socket.join("clock-room");
	socket.on("disconnect", reason => {
		console.log(reason);
	});
});
setInterval(() => {
	io.to("clock-room").emit("time", new Date());
}, 1000);
Server.listen(PORT, err => {
	if (err) console.log(err);
	console.log("Server running on Port ", PORT);
});
