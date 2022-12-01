import { AxiosResponse } from "axios";

export type toastMsgT = {
  title: string;
  description?: string;
};
export type statusT =
  | "info"
  | "error"
  | "success"
  | "warning"
  | "loading"
  | undefined;

type asyncResponseT = any | false;

export type handleToastT = (
  status: statusT,
  content: toastMsgT,
  duration?: number
) => void;

export type asyncToastT = (
  callback: Promise<AxiosResponse<any, any>>,
  msg: toastMsgT,
  loadMsg: string
) => asyncResponseT;
