import { useState, createContext } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false.valueOf,
    authenticate: (token) => { },
    logout: () => { },
});

function AuthContextProvider({ children }) {

    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        //console.log('Token = ', token);
        setAuthToken(token);
    }

    function logout() {
        setAuthToken(null);
    };

    //bunde data and functions into Object
    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>)
};

export default AuthContextProvider;
