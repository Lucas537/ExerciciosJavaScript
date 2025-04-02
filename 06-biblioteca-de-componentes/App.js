import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button mode='contained'>Clicar</Button>
      <Button mode='contained-tonal'>Clicar</Button>
      <Button mode='elevated'>Clicar</Button>
      <Button mode='outlined'>Clicar</Button>
      <Button mode='text'>Clicar</Button>
   

      <Title>Um titulo qualquer</Title>
      <Text variant= 'bodyLarge'>Um texto qualquer</Text>
      <Divider style={{width: '90'}} />
      <Text variant= 'displayLarge'>Um texto qualquer</Text>
      <Divider style={{width: '90'}} />
      <Text variant= 'headlineLarge'>Um texto qualquer</Text>
      <Divider style={{width: '90'}} />
      <Text variant= 'labelLarge'>Um texto qualquer</Text>
      <Divider style={{width: '90'}} />
      <Text variant= 'titleLarge'>Um texto qualquer</Text>
      <Divider style={{width: '90'}} />
      

    <Card style={{margin: 10, backgroundColor: 'red'}}>
    <Card.Title title='Testando'/>
    <Card.Content>
      <Title>Um titulo qualquer</Title>
      <Paragraph> lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</Paragraph>
    </Card.Content>
      </Card>
<Card.Actions>
  <Text>Testeee</Text>
</Card.Actions>

    <Card>
    <Card.Content>
    
      <Paragraph> lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</Paragraph>
    </Card.Content>
      </Card>


      <Card>
    <Card.Content>
      <Title>Um titulo qualquer</Title>
      <Paragraph> lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</Paragraph>
    </Card.Content>
      </Card>


    </View>
    </ScrollView>
    </PaperProvider>

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
