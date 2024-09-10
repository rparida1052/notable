import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface InputTextProps {
    placeholder: string;
    value: string;
    onChangeText: (text:string) => void;
}
const InputText = ({placeholder,value,onChangeText}:InputTextProps) => {
  return (
    <View style={styles.textContainer}>
      <TextInput placeholder={placeholder} style={styles.inputText} value={value} onChangeText={onChangeText}/>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textContainer: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    inputText: {
        fontSize: 20,
    },
})