import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../Dashboard/screen'
import auth from '@react-native-firebase/auth'


const Stack = createNativeStackNavigator()

const MainNav = () => {
  return (
    <Stack.Navigator initialRouteName = 'Dashboard'>
        <Stack.Screen name= "Dashboard" component={Dashboard} options={{
            headerShadowVisible: false,
            headerTitle: 'Trip Planner',
            headerTitleStyle:{
                fontWeight:'600',
                fontSize: 23,
            }
        }}/>
    </Stack.Navigator>
  )
}

export default MainNav;