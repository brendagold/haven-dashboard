// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
export enum Role {
  user = "user",
  admin = "admin",
}
interface IUser extends DefaultUser {
  /**
   * Role of user
   */
//   role?: Role;
  /**
   * Field to check whether a user has a subscription
   */
  userId: string;
  allProperties: Array<string | number>;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
