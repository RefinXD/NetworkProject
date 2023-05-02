import io from "socket.io-client";

export const isHttpStatusOk = (code: number) => {
  return Math.floor(code / 100) == 2;
};

export const nullSafeString = (
  s: string | number | null | undefined,
  defaultVal = ""
) => {
  if (s == null) return defaultVal;
  else return s.toString();
};

export const addHoursToDate = (d: Date, h: number) => {
  d.setTime(d.getTime() + h * 60 * 60 * 1000);
  return d;
};

const socket = io("http://172.20.10.12:4000", { autoConnect: false });

export default socket;
