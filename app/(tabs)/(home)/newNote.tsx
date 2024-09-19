import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import appwriteService from '../../../appwrite';
import { useNavigation, useRouter } from 'expo-router';
import Entypo from "@expo/vector-icons/Entypo";

const NewNote = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [noteTitle, setnoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const handleAddNote = async ()=>{
    const response = await appwriteService.addNote(noteTitle,noteDesc);
    console.log(response);
    console.log("Note added successfully");
    router.navigate("/")
  }
  navigation.setOptions({
    headerRight: () => (
      <View style={{ marginHorizontal: 8 }}>
        <Pressable hitSlop={4} onPress={handleAddNote}>
          <Entypo name="save" size={32} color="black" />
        </Pressable>
      </View>
    ),
  });
  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" style={styles.titleText} value={noteTitle} onChangeText={setnoteTitle}/>
      <TextInput placeholder="Type something..." style={styles.descriptionText} multiline={true} value={noteDesc} onChangeText={setNoteDesc}/>
    </View>
  );
}

export default NewNote

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingVertical:8,
    margin:4,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "semibold",
  },
  descriptionText:{
    fontSize: 18,
    fontWeight: "normal",
  }

})