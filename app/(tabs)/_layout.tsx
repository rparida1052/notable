import { Redirect, Stack, Tabs } from "expo-router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


export default function TabLayout(){
    const {user,isLoggedIn} = useContext(AuthContext);
    if(!isLoggedIn){
        return <Redirect href={"/onboarding"}/>
    }
    console.log("is loggin ",isLoggedIn)
    return(
        <Tabs>
            <Tabs.Screen name="index"/>
        </Tabs>
    )
}