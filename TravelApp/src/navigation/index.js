import React, {useState, useEffect} from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./mainNav";
import AuthNav from "./authNav";

import auth from '@react-native-firebase/auth';

export default AppContainer = () =>{
    const [initailizing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    function onAuthStateChange(user) {
        setUser(user)
        if(initailizing){
            setInitializing(false)
        }
    }

    useEffect(() =>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChange)
        return subscriber
    }, [])

    if(initailizing){
        return null;
    }

    return(
        <NavigationContainer>
            {user ? <MainNav/> : <AuthNav/>}
        </NavigationContainer>
    )
}