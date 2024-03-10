export type IUser = {
  id: number;
  name: string;
  email: string;
  age: number;
  salary_real?: number;
  vip?: boolean;
  profile_id?: number;
  status?: STATUS;
};

export type IProduct = {
  name: string;
  price: number;
  discount: number;
  discountPrice?: number;
};

export type IProfile = {
  id: number;
  name: string;
};

export enum STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}
