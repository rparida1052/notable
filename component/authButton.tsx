import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../theme'


type AuthButtonProps = {
  onPress: () => void;
  title: string;
}
const AuthButton = ({title,onPress}:AuthButtonProps) => {
  return (
    <Pressable  style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default AuthButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor:theme.colorCerulean,
    padding:14,
    marginHorizontal:10,
    borderRadius:8
  },
  buttonText:{
    color:"white",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold",
    letterSpacing:1
  }

})