import { profiles, users } from "../db";
import { IProduct, IProfile, IUser } from "../types/interfaces";

export const Query = {
  hello: () => "Ola!",
  hour: () => new Date(),
  userConnected: (): IUser => ({
    id: 1,
    name: "Pedro backend",
    email: "pedro@backend.com",
    age: 23,
    salary_real: 4300.0,
    vip: true,
  }),
  productHighlight: (): IProduct => ({
    name: "Notebook",
    price: 4000.0,
    discount: 0.15,
  }),
  luckyNumbers: (): number[] =>
    Array.from({ length: 6 }, () => ~~(Math.random() * 60 + 1))
      .sort((a, b) => a - b)
      .filter((value, index, self) => self.indexOf(value) === index),
  users: () => users,
  userById: (_: any, args: { id: number }): IUser | null => {
    const selected = users.filter((user) => user.id === args.id);
    return selected[0] || null;
  },
  profile: () => profiles,
  profileById: (_: any, args: { id: number }): IProfile | null => {
    const selected = profiles.filter((profile) => profile.id === args.id);
    return selected[0] || null;
  },
};
