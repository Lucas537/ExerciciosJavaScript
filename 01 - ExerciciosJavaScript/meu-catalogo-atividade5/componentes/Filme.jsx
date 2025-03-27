import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.capa} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.info}>Ano: {ano}</Text>
      <Text style={styles.info}>Diretor: {diretor}</Text>
      <Text style={styles.info}>Gênero: {tipo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  capa: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});

export default Filme;
