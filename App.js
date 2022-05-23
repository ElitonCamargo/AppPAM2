import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import Logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.paragrafo}>
       Windows 11 foi anunciada em 24 de junho de 2021, e desenvolvida pela Microsoft. É o sucessor do Windows 10, lançado seis anos antes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6d4ed',
    padding: 8,
  },
  img: {
    width: 300,
    height: 50,
  },
  paragrafo: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});