export interface IDetailedTrade {
  active: string;
  close_date: string;
  commision: string;
  open_date: string;
  profit: string;
  type: string;
}

export interface IUser {
  name: string;
  all_trades: number[];
  balance: number;
  pl: number;
  withdrawal: number;
  detailed_trades: IDetailedTrade[];
}

export interface UserCreateDto {
  username: string;
  lastName: string;
  surname: string;
  broker: string;
  name: string;
  investorPassword: string;
}
