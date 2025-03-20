//Imports
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button,Image,StyleSheet,Text,View, ScrollView, } from 'react-native';


export default function App() {

  function alerta() {
    alert("Gols do Messi")
  }



  return (

    <ScrollView>

    <View style={styles.container}>
      <StatusBar style="auto" />


      <Text style={styles.textoGrande}>Messi</Text>
      
      <Text>Lionel Messi está entre os melhores jogadores de futebol de todos os tempos. Aos 37 anos, o atacante do Inter Miami tem 862 gols na carreira e 45 títulos, entre eles a Copa do Mundo de 2022 com a seleção argentina.</Text>
    

     

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4inGtUEuYvRHPOezaTRKSOp-OPRITusq78Q&s' }}
        style={{
          height: 400,
          width: 400
        }}
      />

<Image
        source={require('./imagens/image.png')}
        style={{
          height: 400,
          width: 400
        }}
      />
 

 <Image
        source={require('./imagens/image3.png')}
        style={{
          height: 400,
          width: 400
        }}
      />

<Image
        source={require('./imagens/image4.png')}
        style={{
          height: 400,
          width: 400
        }}
      />

<Image
        source={require('./imagens/image5.png')}
        style={{
          height: 400,
          width: 400
        }}
      />
  
<Button title='Gols' onPress={alerta}></Button>

    </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
    
  },

  textoGrande:{
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'arial',
   

  }
});
