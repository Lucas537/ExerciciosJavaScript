
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const gerarJogo = () => {
  let numeros = new Set();
  while (numeros.size < 6) {
    numeros.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(numeros).sort((a, b) => a - b);
};

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const handleGerarJogo = () => {
    const novoJogo = gerarJogo();
    setJogosMegaSena([...jogosMegaSena, novoJogo]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={handleGerarJogo}>
        Gerar Jogo
      </Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8 }}>
            <Card.Content>
              <Text>Jogo: {item.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
