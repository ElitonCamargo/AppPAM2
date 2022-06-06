import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


import Filme from './assets/Filme.png';

import Titulo from './componentes/Titulo';
import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';

import estilos from './globalStyle/estilos';


export default function App() {
  return (
    <View style={ estilos.container }>     
      <Titulo/>
      <Card/>
      <Conteudo/> 
    </View>
  );
}