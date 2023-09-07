"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;   
    groupName: string;
    setGroupName: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
    address: "",
    setAddress: (): string => '',
    groupName: "",
    setGroupName: (): string => '',
});

export const GlobalContextProvider = ( {children}) => {
    const [address, setAddress] = useState<string>("");
    const [groupName, setGroupName] = useState("");

    return (
        <GlobalContext.Provider value={{address, setAddress, groupName, setGroupName}}>
            {children}
        </GlobalContext.Provider>   
    )
}

export const useGlobalContext = () => useContext(GlobalContext);