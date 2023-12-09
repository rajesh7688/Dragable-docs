import axios from "axios";
import { BASE_URL } from "./Static";

export const apiCallNew = async (endpoint, callMethod, data) => {
  try {
    const res = await axios[callMethod](`${BASE_URL}${endpoint}`, data);
    return res;
  } catch (error) {
    return null;
  }
};
