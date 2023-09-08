"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;   
    groupName: string;
    setGroupName: Dispatch<SetStateAction<string>>;
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
    address: "",
    setAddress: (): string => '',
    groupName: "",
    setGroupName: (): string => '',
    quantity: 1,
    setQuantity: (): number => 1,
});

export const GlobalContextProvider = ( {children}: any) => {
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState<string>("");
    const [groupName, setGroupName] = useState("");

    return (
        <GlobalContext.Provider value={{address, setAddress, groupName, setGroupName, quantity,setQuantity}}>
            {children}
        </GlobalContext.Provider>   
    )
}

export const useGlobalContext = () => useContext(GlobalContext);