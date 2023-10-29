import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Auth} from '../services';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={styles.Text}>{auth().currentUser.displayName}</Text>
      <Text style={styles.email}>{auth().currentUser.email}</Text>
      <View style={{marginTop: 20, gap: 10}}>
        <TouchableOpacity style={styles.Button}>
          <Text>My Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text>Have some queries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={() => Auth.signOut()}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: '93%',
    borderWidth: 1,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    borderRadius: 6,
    borderColor: '#e6e6e6',
    elevation: 4,
    backgroundColor:'#fff'
  },
  Text:{
    fontSize: 24,
    color:'#202020',
    fontWeight:'600',
    alignSelf:'center'
  },
  email:{
    fontSize:13,
    color:'#20202080',
    alignSelf:'center'
  }
});

export default Profile;
