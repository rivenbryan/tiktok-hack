"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;   
}

const GlobalContext = createContext<ContextProps>({
    address: "",
    setAddress: (): string => '',
});

export const GlobalContextProvider = ( {children}) => {
    const [address, setAddress] = useState<string>("");

    return (
        <GlobalContext.Provider value={{address, setAddress}}>
            {children}
        </GlobalContext.Provider>   
    )
}

export const useGlobalContext = () => useContext(GlobalContext);