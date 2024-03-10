import { profiles } from "../db";
import { IUser } from "../types/interfaces";

export const User = {
  salary(user: IUser) {
    return user.salary_real;
  },
  profile(user: IUser) {
    const selected = profiles.filter((profil) => profil.id === user.profile_id);
    return selected[0] || null;
  },
};
