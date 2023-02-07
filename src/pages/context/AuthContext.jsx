import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user,setUser] = useState();
    useEffect((user)=>{
        onUserStateChange((user)=>{
            setUser(user)
        })
    },[])

    console.log(user);
    console.log("시발")
    return <AuthContext.Provider value={{user,login,logout,uid:user?user.uid:''}}>
        {children}
    </AuthContext.Provider>
}

export function useAuthContext(){
    return useContext(AuthContext);
}