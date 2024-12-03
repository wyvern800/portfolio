import { app } from "./app";
import { ILogType } from "./utils/ILogType";
import { WinstonLogger as Logger } from "./utils/implementations/WinstonLogger";

const logger = Logger.getInstance();

app.listen(3333, () => logger.log("Server is running!", ILogType.WARN));