import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 50
    },
    textoGrande: {
        fontSize: 20,
        fontWeight: 350
    }
})