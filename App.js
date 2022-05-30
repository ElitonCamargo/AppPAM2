import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Foto from './assets/Foto.png';
import Filme from './assets/Filme.png';


export default function App() {
  return (
    <View style={ estilos.container }>
      {/* Titulo */}
      <View style={ estilos.barraTituloContainer }>
          <Text style={ estilos.barraTituloTitulo }>Atores famosos</Text>
      </View>

      {/* Card */}
      <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
          <Image source={ Foto } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>Samuel Jackson</Text>
          <Text style={ estilos.cardParagrafo }>Ator e produtor norte-americano</Text>
        </View>
      </View>  

      {/* Conteúdo */}
      <View style={ estilos.conteudoContainer }>
        <Text style={ estilos.conteudoTitulo }>Sobre o Ator</Text>

        <Text style={ estilos.conteudoSubtitulo }>Sua vida</Text>
        <Text style={ estilos.conteudoParagrafo }>Nascido em Washington, DC, 21 de dezembro de 1948.</Text>
        <Text style={ estilos.conteudoParagrafo }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>
      
        <Text style={ estilos.conteudoSubtitulo }>Início da carreira</Text>
        <Text style={ estilos.conteudoParagrafo }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
        <Image source={ Filme } style={ estilos.conteudoMagem }/>
      </View>
    </View>
  );
}
const estilos = StyleSheet.create({
  //1º) Estilo do container principal 
  container: {
    flex: 1,
    backgroundColor: '#0c4491',
  },
  //2º) Estilo da barra de título
  barraTituloContainer: {
    paddingTop: 35,
    paddingHorizontal: 20,
    height: 90
  },
  barraTituloTitulo: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: "bold",
    color: '#ff0'
  },
  //3º Estilo do container do card;
  cardContainer: {
    alignItems: "center",
    backgroundColor: '#0a1c35',
    paddingVertical: 20,
  },
  cardBox: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 300,

  },
  cardFotoCapa: {
    width: 300,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardNome: {
    marginTop: 10,
    fontSize: 22,
  },
  cardParagrafo: {
    margin: 10,
  },
  //4º Estilo do conteúdo
  conteudoContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  conteudoTitulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  conteudoSubtitulo: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  conteudoParagrafo: {
    marginTop: 6,
  },
  conteudoImagem: {
    width: 250,
    height: 100,
    marginTop: 10,
  }
});