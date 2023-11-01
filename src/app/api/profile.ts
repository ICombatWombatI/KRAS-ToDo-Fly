import { AxiosRequestConfig } from "axios";
import { baseApi } from "./base";
import { Profile } from "../models/profile.model";

export function getProfile(options: AxiosRequestConfig<any> | undefined): Promise<Profile> {
  return baseApi.get(`profile`, options).then(res => res.data)
}
