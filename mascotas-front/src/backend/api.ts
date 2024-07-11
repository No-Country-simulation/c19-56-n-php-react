import axios from "axios";

export const urlBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE,
});