import { createContext, useState } from "react";

export const ProdutoContext = createContext({});

export function ProdutoProvider({children}) {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    
    function viuProduto(produto){
        setQuantidade(quantidade+1);

        let novoCarrinho = carrinho;
        novoCarrinho.push(produto);
        setCarrinho(novoCarrinho);

        //Set é uma coleção de valores únicos. Cada valor só pode existir uma vez no set, que é um objeto.
        let novoUltimosVistos =  new Set(ultimosVistos);
        novoUltimosVistos.add(produto);
        setUltimosVistos([...novoUltimosVistos]);
    }

    return (
        <ProdutoContext.Provider value={{
            carrinho,
            quantidade,
            ultimosVistos,
            viuProduto
            }}>
                {children}
        </ProdutoContext.Provider>
    )
}