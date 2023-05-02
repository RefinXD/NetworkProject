import appConfig from "../configs/appConfig";
import ApiErrorResponse from "../exceptions/ApiErrorResponse";
import { ApiResponseInterface } from "../interfaces/ApiResponseInterface";
import { RoomInterface } from "../interfaces/RoomInterface";
import { isHttpStatusOk } from "../utils/Utils";
import axios from "axios";

export const getAllRooms = async () => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/room`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<RoomInterface[]>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const getRoomById = async (id: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/room/${id}`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<RoomInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const getAllRoomWithName = async (name: String) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
      
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/search?name=${name}`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<String>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const createRoom = async (data: RoomInterface) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.post(
    `${appConfig.BACKEND_URL}/api/room`,
    data,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<RoomInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );

  return res;
};

export const updateRoomById = async (id: string, data: any) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.put(
    `${appConfig.BACKEND_URL}/api/room/${id}`,
    data,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<RoomInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const deleteRoomById = async (id: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.delete(
    `${appConfig.BACKEND_URL}/api/room/${id}`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<RoomInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};
