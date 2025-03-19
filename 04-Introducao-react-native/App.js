//Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//Componentes principal
//Ele deve retornar o que será rederizado na tela (Template feito com JSX)
export default function App() {

  //Logica do meu componente

  const nome = "Lucas"

  function alerta() {
    alert("Você Clicou no Botão")
  }



  // Retorno com JSX
  return (

    <ScrollView>



  
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Comentário centro  */}
      {/* Código Javascript */}
      <Text style={styles.textoGrande}>Palmeiras roubou o São Paulo</Text>
      <Text style={styles.textoGrande}>Palmeiras roubou o São Paulo</Text>
      <Text style={styles.textoGrande}>Palmeiras roubou o São Paulo</Text>
      <Text style={styles.textoGrande}>Palmeiras roubou o São Paulo</Text>
      <Text style={styles.textoGrande}>Palmeiras roubou o São Paulo</Text>
      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>

      <Button title='Alterar' onPress={alerta}></Button>

      <Image
        source={{ uri: 'https://media.tenor.com/76hC1837BhEAAAAM/monkey-capucin.gif' }}
        style={{
          height: 300,
          width: 300
        }}
      />


      <Image
        source={require('./Imagens/image.png')}
        style={{
          height: 300,
          width: 300
        }}
      />
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },

  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});
