import { ILogType } from "./ILogType";

export interface ILogger {
  log(message: string, type?: ILogType): void;
} 