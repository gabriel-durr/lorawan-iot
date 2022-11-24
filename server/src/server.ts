import {serverHttp} from "./http";
import "./websockets";

const PORT = process.env.PORT || 7000;

serverHttp.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
