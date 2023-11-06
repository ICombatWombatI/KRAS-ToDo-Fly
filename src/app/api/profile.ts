import { AxiosRequestConfig } from "axios";
import { baseApi } from "./base";
import { Profile } from "../models/profile.model";

export function getProfile(options: AxiosRequestConfig) {
  return baseApi.get<Profile>(`profile`, options).then(res => res.data);
}
