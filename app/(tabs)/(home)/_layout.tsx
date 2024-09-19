import { Stack, useRouter } from "expo-router";
import {  Text, View } from "react-native";
import UtilButton from "../../../component/utilButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet } from "react-native";
export default function HomeLayout(){
  const router = useRouter();
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: (props) => <Text style={styles.titleText}>Notes</Text>,
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <UtilButton onPress={() => console.log("dasd")}>
                  <FontAwesome name="search" size={24} color="black" />
                </UtilButton>
                <UtilButton onPress={() => router.navigate("/newNote")}>
                  <Feather name="plus" size={24} color="black" />
                </UtilButton>
              </View>
            ),
          }}
        />
        <Stack.Screen
        
          name="newNote"
          options={{
            headerTitle: "New Note",
           
          }}
        />
        <Stack.Screen 
          name="note/[noteId]"
          
        />
      </Stack>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "semibold",
  },
  headerRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 14,
    width: 100,
  },
});