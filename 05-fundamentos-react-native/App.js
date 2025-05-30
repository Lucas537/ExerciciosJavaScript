import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';


export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente />
      <SegundoComponente />
      <JavascriptComponente />

      <Perfil
        nome="Gustavo"
        sobrenome="Lima"
        idade={30}
      />

      <Perfil
        nome="Lorran"
        sobrenome="Lucas"
        idade={24}
      />

      <Perfil
        nome="Igor"
        sobrenome="Marques"
        idade={19}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});