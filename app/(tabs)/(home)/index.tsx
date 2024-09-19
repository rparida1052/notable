import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import AuthButton from "../../../component/authButton";
import { useEffect, useState } from "react";
import appwriteService from "../../../appwrite";
import NoteCard from "../../../component/noteCard";

export default function App() {
  const router = useRouter();
const [notes, setNotes] = useState<Document[] | null >(null)
  const fetchNotes = async ()=>{
    const response = await appwriteService.fetchNotes();
    console.log(response.documents)
    setNotes(response.documents);
  }
  useEffect(()=>{
    fetchNotes();
  },[]);
  return (
    <View style={styles.container}>
     <FlatList
      data={notes}
      renderItem={({item})=>(
        <NoteCard title={item.noteTitle} desc={item.noteDesc}/>
      )}
      keyExtractor={(item)=>item.$id}
      style={styles.noteCardContainer}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  noteCardContainer:{
    width: "100%",
    backgroundColor: "#fff",
    padding:10,
    gap:10,
    
  }
});
