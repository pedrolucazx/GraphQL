import { IProfile, IUser, STATUS } from "../types/interfaces";

let id = 1;
export const nextId = () => id++;

export const users: IUser[] = [
  {
    id: nextId(),
    name: "any user 1",
    email: "anyemail@mail.com",
    age: 21,
    profile_id: 1,
    status: STATUS.ACTIVE,
  },
  {
    id: nextId(),
    name: "any user 2",
    email: "anyemail2@mail.com",
    age: 22,
    profile_id: 2,
    status: STATUS.INACTIVE,
  },
  {
    id: nextId(),
    name: "any user 3",
    email: "anyemail3@mail.com",
    age: 23,
    profile_id: 1,
    status: STATUS.BLOCKED,
  },
];

export const profiles: IProfile[] = [
  { id: 1, name: "Common" },
  { id: 2, name: "Administrator" },
];
