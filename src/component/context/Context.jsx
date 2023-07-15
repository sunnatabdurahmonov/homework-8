import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext()

export const LoginContextProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token"))


    const info = {
        token,
        setToken
    }
    return (
        <LoginContext.Provider value={info}>
        {children}
       </LoginContext.Provider>
    )
}