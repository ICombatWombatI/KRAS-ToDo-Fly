import axios from "axios";

export const baseApi = axios.create({ baseURL: /*import.meta.env.API_URL*/ 'http://localhost:3000'})
