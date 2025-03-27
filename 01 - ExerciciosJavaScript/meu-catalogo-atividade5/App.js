import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

const listaFilmes = [
  {
    nome: "A Doce Vida",
    ano: 1960,
    diretor: "Federico Fellini",
    tipo: "Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
  },
  {
    nome: "Psicose",
    ano: 1960,
    diretor: "Alfred Hitchcock",
    tipo: "Terror",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/250px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg"
  },
  {
    nome: "O Beijo da Mulher Aranha",
    ano: 1985,
    diretor: "Hector Babenco",
    tipo: "Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
  },
  {
    nome: "Poltergeist - O Fenômeno",
    ano: 1982,
    diretor: "Tobe Hooper",
    tipo: "Terror",
    capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Poltergeist_%281982%29_-_poster.png/200px-Poltergeist_%281982%29_-_poster.png"
  }
];

const listaSeries = [
  {
    nome: "Buffy, a Caça-Vampiros",
    ano: 1997,
    diretor: "Joss Whedon",
    temporadas: 7,
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
  },
  {
    nome: "Desperate Housewives",
    ano: 2004,
    diretor: "Marc Cherry",
    temporadas: 8,
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
  },
  {
    nome: "Sons of Anarchy",
    ano: 2008,
    diretor: "Kurt Sutter",
    temporadas: 7,
    capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
  }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme key={index} {...filme} />
      ))}
      
      <Text style={styles.header}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  }
});
