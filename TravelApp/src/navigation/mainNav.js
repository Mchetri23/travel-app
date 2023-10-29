import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Dashboard/screen';
import HomeScreen from '../HomeScreen/screen';
import auth from '@react-native-firebase/auth';
import Options from '../Booking/Options';
import UserIcon from '../assets/userProfile icon';
import Profile from '../Profile/screen';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const MainNav = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions= {({navigation}) => ({
      headerRight: () => (
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 5,
                elevation: 4,
                backgroundColor: '#fff',
              }}
              onPress={() => navigation.navigate('Profile')}>
              <UserIcon width="20" height="20" />
            </TouchableOpacity>
          ),
    })}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShadowVisible: false,
          headerTitle: 'Trip Planner',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 23,
          },
        }}
      />
       <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: 'Profile',
          headerBackVisible: true,
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 23,
            color: '#000',
          }}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: 'Explore',
          headerBackVisible: true,
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 23,
            color: '#000',
          },
        }}
      />
      <Stack.Screen
        name="Transport"
        component={Options}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          headerTitle: 'Transport',
          headerBackVisible: false,
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 23,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: '#000000D9',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
