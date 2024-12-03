import { ILogger } from "../ILogger";
import { ILogType } from "../ILogType";
import winston from "winston";
import { format } from "date-fns";

export class WinstonLogger implements ILogger {
  private logger: winston.Logger;
  private static winstonLogger: WinstonLogger;

  public static getInstance(): WinstonLogger {
    if (!WinstonLogger.winstonLogger) {
      console.log(1);
      WinstonLogger.winstonLogger = new WinstonLogger();
    }
    return WinstonLogger.winstonLogger;
  }

  private constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }: any) => {
          return `[${level}] [${format(
            timestamp,
            "hh:mm:ss | dd/MM/yyyy"
          )}] ${message}`;
        })
      ),
      defaultMeta: { service: "user-service" },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });
  }

  log(message: string, type: ILogType = ILogType.INFO): void {
    console.log(2);
    switch (type) {
      case ILogType.INFO:
        this.logger.info(message);
        break;
      case ILogType.ERROR:
        this.logger.error(message);
        break;
      case ILogType.WARN:
        this.logger.warn(message);
        break;
      default:
        this.logger.info(message);
        break;
    }
  }
}
