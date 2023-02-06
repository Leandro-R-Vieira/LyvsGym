import { UserDTO } from "@dtos/UserDTO";
import { ReactNode, createContext } from "react";

export type AuthCOntextDataProps = {
  user: UserDTO;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthCOntextDataProps>({} as AuthCOntextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value={{
      user: {
        id: '1',
        name: 'Leandro',
        email: 'leandro@gmail.com',
        avatar: 'avatar.png',
      }

    }}>
      {children}
    </AuthContext.Provider>
  )
}