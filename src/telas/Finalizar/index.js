import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext, useEffect, useState } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutoContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {
  const [total, setTotal] = useState(0);

  //Tema context
  const { 
    temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);
  
  //Usuário context
  const { 
    usuario } = useContext(AutenticacaoContext);

  //Últimos vistos context
  const {
    carrinho } = useContext(ProdutoContext); 

  let valor = 0.
  useEffect(() =>{
    carrinho.map((item) => valor += item.preco)
    setTotal(valor)
  },[])

  return (
    <View style={estilo.container}>
      <StatusBar />
    <Text>Total: {total}</Text>
    <TouchableOpacity 
    style={estilo.botao}
    onPress={() => navigation.navigate('Principal')}>
      <Text style={estilo.botaoTexto}>Finalizar</Text>
    </TouchableOpacity>

    </View>
  );
}

