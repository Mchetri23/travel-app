import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Auth} from '../services';
import auth from '@react-native-firebase/auth';
import SearchBar from '../components/Searchbar';

const Dashboard = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '93%',
          alignSelf: 'center',
          flex: 0.4,
          justifyContent: 'space-evenly',
        }}>
        <View style={{gap: 10}}>
          <Text style={{color:'#202020', fontStyle:'italic'}}>Select your starting destination!</Text>
          <SearchBar />
        </View>
        <View style={{gap: 10}}>
          <Text style={{color:'#202020', fontStyle:'italic'}}>Where do you want to go?</Text>
          <SearchBar />
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: '#0086ff',
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
            borderRadius: 6,
          }}>
          <Text style={{color: '#fff'}}>Search for options</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const style = StyleSheet.create({
  Button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoldText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.95,
  },
});
