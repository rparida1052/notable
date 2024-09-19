import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Note = () => {
  const data = useLocalSearchParams()
  console.log(data)
  return (
    <View>
      <Text>{data.title}</Text>
      <Text>{data.desc}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})