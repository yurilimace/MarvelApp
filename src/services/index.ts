import axios from "axios";

export const BaseAPI = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});
