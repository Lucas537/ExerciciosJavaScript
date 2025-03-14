//Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

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
    <View style={styles.container}>   
    <StatusBar style="auto" />

   {/* Comentário centro  */}
 {/* Código Javascript */}
   <Text>Palmeiras roubou o São Paulo</Text>
   <Text>{ 2+2 }</Text>
   <Text>{nome}</Text>
  
     <Button title='Alterar' onPress={alerta}></Button>

    <Image 
    source={{uri:'https://media.tenor.com/76hC1837BhEAAAAM/monkey-capucin.gif'}}
    style={{
      height: 300,
      width: 300
    }}



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
