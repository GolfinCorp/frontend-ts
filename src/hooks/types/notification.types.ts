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

type asyncResponseT = {} | false;

interface data {
  [index: string]: any;
  error?: string;
}
interface response {
  [index: string]: number | string | object | undefined;
  status: number;
  data?: data;
  error?: string;
}

export type handleToastT = (
  status: statusT,
  content: toastMsgT,
  duration?: number
) => void;

export type asyncToastT = (
  callback: response,
  msg: toastMsgT,
  loadMsg: string
) => asyncResponseT;
