import { createContext } from "react";


const AuthContext = createContext<AuthContextTypes>({
    user: null,
    isLoggedIn: false,
    setUser: () => {},
    setIsLoggedIn: () => {},
});
export default AuthContext;