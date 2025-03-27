import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponentes';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

{/* <JavascriptComponente/> */}
{/* <PrimeiroComponente/> */}
<ListaComponente/>
    
       {/* <Perfil 
        nome="Lucas"
        idade={21}
        email="ll6767248@gmail.com"
        telefone="61992572053"
      />

      <Perfil
        nome="Yudi"
        idade={30}
        email="bomdiaecompanhia@gmail.com"
        telefone="6140028922"
      />

      <Perfil
        nome="Lorran"
        idade={18}
        email="lorranlucas@gmail.com"
        telefone="6198411050"
      />

*/}

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