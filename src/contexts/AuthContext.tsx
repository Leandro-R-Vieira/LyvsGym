import { UserDTO } from "@dtos/UserDTO";
import { createContext } from "react";

export type AuthCOntextDataProps = {
  user: UserDTO;
}

export const AuthContext = createContext<AuthCOntextDataProps>({} as AuthCOntextDataProps);