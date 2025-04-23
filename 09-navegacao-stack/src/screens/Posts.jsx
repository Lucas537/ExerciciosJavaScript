import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Posts({navigation, route}) {

    console.log ('navigation =>' , navigation)
  return (
    <View>
      <Text>Posts</Text>
      <Text>Posts</Text>
      <Text>Posts</Text>
      <Text>Posts</Text>
      <Text>Posts</Text>
      <Text>Posts</Text>
      <Text>Posts</Text>


      <Button 
      node='contained'
      onPress={() => navigation.navigate('Feed')}>

    Ir para Feed
    
      </Button>

      <Button
      node='contained'
      onPress={() => navigation.goBack('')}>

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})