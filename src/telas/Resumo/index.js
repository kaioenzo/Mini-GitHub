import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutoContext } from '../../contexts/ProdutosContext';

export default function Resumo({navigation}) {

  //Tema context
  const { 
    temaAtual, 
    setTemaAtual, 
    temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);
  
  //Usuário context
  const { 
    usuario } = useContext(AutenticacaoContext);

  //Últimos vistos context
  const {
    quantidade,
    carrinho } = useContext(ProdutoContext); 

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario?.nome}!</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
          </TouchableOpacity>
        </View>
      </View>
        <Text style={estilo.textoQuantidade}>{quantidade} itens</Text>
      <FlatList
        data={carrinho}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={false} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
      />

    <TouchableOpacity 
    style={estilo.botao}
    onPress={() => navigation.navigate('Finalizar')}>
      <Text style={estilo.botaoTexto}>Finalizar</Text>
    </TouchableOpacity>

    </View>
  );
}

