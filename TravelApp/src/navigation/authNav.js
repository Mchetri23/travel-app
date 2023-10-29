import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Login/screen'
import signUp from '../Login/signUp'

const Stack = createNativeStackNavigator()

const AuthNav = () => {
  return (
    <Stack.Navigator initialRouteName = 'Login'>
        <Stack.Screen name='Login' component={Login} options={
            {
                headerShadowVisible: false,
                headerShown: false,
                headerTitle:"",
                headerStyle:{
                    backgroundColor:'#181418'
                }
            }
        }/>
        <Stack.Screen name='SignUp' component={signUp} options={
            {
                headerShadowVisible: false,
                headerShown: false,
                headerTitle:"",
                headerStyle:{
                    backgroundColor:'#181418'
                }
            }
        }/>
    </Stack.Navigator>
  )
}

export default AuthNav