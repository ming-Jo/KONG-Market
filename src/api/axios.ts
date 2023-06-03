import axios from "axios";

export const BASE_URL = "https://openmarket.weniv.co.kr/";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
