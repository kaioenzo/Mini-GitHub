import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function InfoProvider({children}) {

    const valor = 120;
    const [nome, setNome] = useState('Kaio');

    return (
        <GlobalContext.Provider value={{
            valor,
            nome,
            setNome}}>
                {children}
        </GlobalContext.Provider>
    )
}