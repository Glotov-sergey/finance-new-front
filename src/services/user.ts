import axios from "axios";

export const getUserInfo = (data: any) => {
  return axios.post("https://46.19.64.140:8080/login", data);
};
