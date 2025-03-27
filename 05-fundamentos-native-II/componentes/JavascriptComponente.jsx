import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    //Logica de componente
    
const nome = "Lucas"
const idade = 21


function checarmaioridade (){
    if (idade >=18) {
        return "maior de idade"
    }
    else
    return "menor de idade"
}

function alerta (){
    console.log ("Chamou a função checarIdade")
    alert("Clicou no Botão")
}


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: {nome} </Text>
      <Text style={styles.texto}>Idade: {idade} </Text>
      <Text style={styles.texto}>Eu sou: {checarmaioridade()} </Text>
      <Button title='Clicar' onPress={alerta} />


    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        padding: 50
    },
texto: {
    fontSize:20,
    fontWeight: 350
}


    })