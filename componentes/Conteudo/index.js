import React from 'react';
import { View, Text, Image } from 'react-native';

import Filme from '../../assets/Filme.png';
import estilos from './estilos'; 

export default function Conteudo() {
  return (
    <View style={ estilos.conteudoContainer }>
      <Text style={ estilos.conteudoTitulo }>Sobre o Ator</Text>

      <Text style={ estilos.conteudoTubtitulo }>Sua vida</Text>
      <Text style={ estilos.conteudoParagrafo }>Nascido em Washington, DC, 21 de dezembro de 1948.</Text>
      <Text style={ estilos.conteudoParagrafo }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>
    
      <Text style={ estilos.conteudoTubtitulo }>Início da carreira</Text>
      <Text style={ estilos.conteudoParagrafo }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
      <Image source={ Filme } style={ estilos.conteudoMagem }/>
    </View>
  )
}