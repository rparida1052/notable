import { Redirect, Stack, Tabs } from "expo-router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import UtilButton from "../../component/utilButton";
import Feather from "@expo/vector-icons/Feather";


export default function TabLayout(){
    const {user,isLoggedIn} = useContext(AuthContext);
    if(!isLoggedIn){
        return <Redirect href={"/onboarding"}/>
    }
    console.log("is loggin ",isLoggedIn)
    return (
      <Tabs>
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Notes",
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="pencil-square-o" size={size} color={color} />
            ),
           
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-o" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    );
}

