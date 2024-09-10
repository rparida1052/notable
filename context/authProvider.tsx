

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import appwriteService from '../appwrite'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedInUser, setLoggedInUser] = useState<Document | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUser = async () => {
    const response = await appwriteService.getUser();
    setLoggedInUser(response);
    setIsLoggedIn(true);
  };
  useEffect(() => {}, []);
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