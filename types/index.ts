interface AuthContextTypes {
    user: Document | null;
    isLoggedIn: boolean;
    setUser: (user: Document | null) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}