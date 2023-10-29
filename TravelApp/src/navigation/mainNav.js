import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../Dashboard/screen'
import HomeScreen from '../HomeScreen/screen'
import auth from '@react-native-firebase/auth'
import Options from '../Booking/Options'


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
        <Stack.Screen name= "Home" component={HomeScreen} options={{
            headerShadowVisible: false,
            headerShown:true,
            headerTitle: 'Home',
            headerBackVisible: false,
            headerTitleStyle:{
                fontWeight:'600',
                fontSize: 23,
                color:'#fff'
            },
            headerStyle:{
              backgroundColor:'#000000D9',
            }
        }}/>
        <Stack.Screen name= "Transport" component={Options} options={{
            headerShadowVisible: false,
            headerShown:false,
            headerTitle: 'Transport',
            headerBackVisible: false,
            headerTitleStyle:{
                fontWeight:'600',
                fontSize: 23,
                color:'#fff'
            },
            headerStyle:{
              backgroundColor:'#000000D9',
            }
        }}/>
    </Stack.Navigator>
  )
}

export default MainNav;