import axios from "axios";
import { CreateConsultantDto, LoginConsultantDto } from "../types/consultant";
import { UserCreateDto } from "../types/user";

export const createConsultant = (data: CreateConsultantDto) => {
  return axios.post("http://localhost:5500/api/consultant/create", data);
};

export const loginConsultant = (data: LoginConsultantDto) => {
  return axios.post("http://localhost:5500/api/consultant/login", data);
};

export const getConsultant = (id: number) => {
  return axios.get(`http://localhost:5500/api/consultant/${id}`);
};

export const createUser = (id: number, data: UserCreateDto) => {
  return axios.post(`http://localhost:5500/api/consultant/${id}/create`, data);
};
