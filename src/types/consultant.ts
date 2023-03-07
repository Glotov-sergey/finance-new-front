export interface CreateConsultantDto {
  email: string;
  initialEarning: number;
  level?: number;
}

export interface IConsultant {
  id: number;
  email: string;
  accessCode: string;
  name: string;
  lastName: string;
  surname: string;
  imageUrl: string | null;
  ownEarnings: number;
  structureEarnings: number;
  ownConsultants: number;
  masterName: string;
  earningsPerMonth: number;
  level: number;
  activeAccount: number;
  users: IConsultantUser[] | null;
}

export interface LoginConsultantDto {
  email: string;
  accessCode: string;
}

export interface IConsultantUser {
  id: number;
  username: string;
  lastName: string;
  surname: string;
  name: string;
  broker: string;
  investorPassword: string;
  account: string | null;
}
