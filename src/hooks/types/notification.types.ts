export type toastMsgT = {
  title: string;
  description?: string;
};
export type status =
  | "info"
  | "error"
  | "success"
  | "warning"
  | "loading"
  | undefined;

type asyncResponseT = {} | false;

export type handleToastT = (
  status: status,
  content: toastMsgT,
  duration?: number
) => void;

export type asyncToastT = (
  callback: object,
  msg: toastMsgT,
  loadMsg: string
) => asyncResponseT;
