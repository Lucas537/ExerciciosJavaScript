import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Feed({navigation, route}) {

    console.log ('navigation =>' , navigation)
  return (
    <View>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>


      <Button 
      node='contained'
      onPress={() => navigation.navigate('Posts')}>

    Ir para Posts
      </Button>

      <Button
      node='contained'
      onPress={() => navigation.goBack('')}>

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})