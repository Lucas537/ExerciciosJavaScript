import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import ListaComponente from './componentes/ListaComponente';
import Perfil from './componentes/Perfil'

export default function App() {
  return (
    <View style={styles.container}>
    
      <PrimeiroComponente />
      <JavascriptComponente />
      <ListaComponente />
      <Perfil
        nome= "Lucas"  
        sobrenome= "Lopes"
        idade= {21}
      />
      <Perfil
        nome= "Lucas"  
        sobrenome= "Lopes"
        idade= {21}
      /> 

    



      <StatusBar style="auto" />

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