import appConfig from "../configs/appConfig";
import ApiErrorResponse from "../exceptions/ApiErrorResponse";
import {
  ApiLoginResponseInterface,
  ApiResponseInterface,
} from "../interfaces/ApiResponseInterface";
import { UserInterface } from "../interfaces/UserInterface";
import { addHoursToDate, isHttpStatusOk } from "../utils/Utils";
import axios from "axios";
import { setCookie } from "cookies-next";

export const getAllUsers = async () => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/user`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<UserInterface[]>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const getUserById = async (id: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/user/${id}`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<UserInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const getUserByNickname = async (nickname: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/user/${nickname}`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<UserInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const createUser = async (data: UserInterface) => {
  const axios_res = await axios.post(`${appConfig.BACKEND_URL}/api/user`, data);
  const res = axios_res.data as ApiResponseInterface<UserInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );

  return res;
};

export const updateUserById = async (id: string, data: any) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.put(
    `${appConfig.BACKEND_URL}/api/user/${id}`,
    data,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<UserInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const deleteUserById = async (id: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.delete(
    `${appConfig.BACKEND_URL}/api/user/${id}`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<UserInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const userLogin = async (username: string, password: string) => {
  const axios_res = await axios.post(`${appConfig.BACKEND_URL}/auth/login`, {
    username: username,
    password: password,
  });
  const res = axios_res.data as ApiLoginResponseInterface;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  else {
    const cookieOptions = {
      expires: addHoursToDate(new Date(), 1),
    };
    setCookie("accessToken", res.token, cookieOptions);
    if (res.token != null) {
      localStorage.setItem("accessToken", res.token);
      localStorage.setItem(
        "token_expires",
        addHoursToDate(new Date(), 1).toString()
      );
    }
  }
  return res;
};

export const addFriendById = async (userid: string, friendid: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};

  const axios_res = await axios.post(
    `${appConfig.BACKEND_URL}/api/user/friends/${userid}`,
    { friendid },
    configs
  );

  const res = axios_res.data as ApiResponseInterface<UserInterface>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};

export const getFriendsById = async (id: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/user/friends/${id}`,
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

export const getFriendsNameById = async (id: string) => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/user/friends/${id}`,
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

export const getAllOnlineUsers = async () => {
  const configs =
    localStorage.getItem("accessToken") != undefined
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      : {};
  const axios_res = await axios.get(
    `${appConfig.BACKEND_URL}/api/onlineUsers`,
    configs
  );
  const res = axios_res.data as ApiResponseInterface<UserInterface[]>;
  if (!isHttpStatusOk(res.code))
    throw new ApiErrorResponse(
      res.message ?? "",
      res.code,
      res.errors ?? undefined,
      res.tag ?? ""
    );
  return res;
};
