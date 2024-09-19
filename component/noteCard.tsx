import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../theme';
import { useRouter } from 'expo-router';

interface NoteCardProps {
  title: string;
  desc: string;
}
const NoteCard = ({title,desc}:NoteCardProps) => {
  const router = useRouter();
  const handleShowNote = ()=>{
    const data = {title:title,desc:desc}
    router.push({pathname:"note/[noteId]",params:data})
  }
  return (
    <Pressable style={styles.container} onPress={handleShowNote}>
      <Text style={styles.cardTitle}>{title}</Text>
    </Pressable>
  )
}

export default NoteCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#91F48F",
    justifyContent: "center",
    marginBottom: 10,
    padding: 30,
    borderRadius: 10,
  },
  cardTitle:{
    fontSize: 25,
    fontWeight: "semibold",
  }
});