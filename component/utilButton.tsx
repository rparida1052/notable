import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../theme'
interface UtilButtonProps {
    title?:string,
    onPress:()=>void,
    children:React.ReactNode
}
const UtilButton = ({title,onPress,children}:UtilButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
     {children}
    </Pressable>
  )
}

export default UtilButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colorGrey,
        padding:10,
        borderRadius:6,
    }
})