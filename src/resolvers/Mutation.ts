import { nextId, users } from "../db";
import { IUser, STATUS } from "../types/interfaces";

const indexUser = (filter: { id?: number; email?: string }) => {
  if (!filter) return -1;
  if (filter.id) {
    return users.findIndex((user) => user.id === filter.id);
  } else if (filter.email) {
    return users.findIndex((user) => user.email === filter.email);
  }
  return -1;
};

export const Mutation = {
  newUser(_: any, { data }: any) {
    const emailValidade = users.some(({ email }) => email === data.email);
    if (emailValidade) throw new Error("Email cadastrado");

    const newUser: IUser = {
      ...data,
      id: nextId(),
      profile_id: 1,
      status: STATUS.ACTIVE,
    };

    users.push(newUser);
    return newUser;
  },
  deleteUser(_: any, { filter }: any): IUser | null {
    const indexToDelete = indexUser(filter);
    if (indexToDelete < 0) return null;
    return users.splice(indexToDelete, 1)[0];
  },
  updateUser(_: any, args: IUser): any {
    const indexToUpdate = users.findIndex((user) => user.id === args.id);
    if (indexToUpdate == -1) return null;
    const updatedUser = { ...users[indexToUpdate], ...args };
    users[indexToUpdate] = updatedUser;
    return updatedUser;
  },
};
