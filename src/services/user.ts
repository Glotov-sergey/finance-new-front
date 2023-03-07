import axios from "axios";

export const runUpdate = () => {
  return axios.get("http://46.19.64.140:8080/");
};

export const getAllUser = (account: string) => {
  return axios.post(`http://46.19.64.140:8080/get_info?name=${account}`);
};

export const getUserInfo = (data: any) => {
  return axios.post("http://46.19.64.140:8080/add_to_queue", data);
};
