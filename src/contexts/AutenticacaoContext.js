import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({children}) {
    const [usuario, setUsuario] = useState({});

    function login( email, senha ) {
        if( email == 'kaio' && senha == '1234') {
            setUsuario({
                nome: 'Kaio',
                email: email,
                endereco: 'Quadra 23 Casa 51, Brasília',
                telefone: '(61)9999-9999'
        })
            return 'ok'
        }else {
            return 'E-mail ou senha incorretos'
        }
    }

    
    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login
            }}>
                {children}
        </AutenticacaoContext.Provider>
    )
}