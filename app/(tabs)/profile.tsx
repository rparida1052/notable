import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AuthButton from '../../component/authButton';
import { useRouter } from 'expo-router';
import appwriteService from '../../appwrite';

const Profile = () => {
  const {user} = useContext(AuthContext);
  const router = useRouter();
  const handleLogout = async ()=>{
    await appwriteService.logoutUser();
    router.replace("/onboarding")
  }
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name="user-circle" size={100} color="black" />
      </View>
      <Text style={styles.nameText}>{user?.name}</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <View style={styles.logoutButtonView}>
        <AuthButton title="Log out" onPress={handleLogout} />
      </View>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop:100,
  },
  nameText:{
    fontSize: 32,
    fontWeight: "semibold",
  },
  emailText:{
    fontSize: 20,
    color: "grey",
  },
  logoutButtonView:{
    marginTop: 20,
  }
})