

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import appwriteService from '../appwrite'
import { useRouter } from 'expo-router';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<Document | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUser = async () => {
    console.log("Calling from the auth provider");
    const response = await appwriteService.getUser();
    console.log(response);
    setLoggedInUser(response);
    setIsLoggedIn(true);
    router.replace('/');
    
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{
        user: loggedInUser,
        isLoggedIn: isLoggedIn,
        setUser: setLoggedInUser,
        setIsLoggedIn: setIsLoggedIn,
    }}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider