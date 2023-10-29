import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Auth} from '../services';
import Login from './screen';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [name, setName] = useState("")

  const handleEmailChange = text => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(text));
    setEmail(text);
  };

  return (
    <ImageBackground
      source={require('../assets/backgrd.jpg')}
      style={style.background}>
      <View style={style.container}>
        <View style={{width: '93%', alignSelf: 'center', marginBottom: 20}}>
          <Text style={{fontSize: 34, fontWeight: 'bold', color: '#fff'}}>
            Hi There!
          </Text>
          <Text style={{color: 'red', fontSize: 23, fontWeight: '700'}}>
            Ready to start your trip?
          </Text>
        </View>
        <View>
        <View
          style={{
            width: '93%',
            padding: 10,
            gap: 15,
            borderRadius: 6,
            elevation: 4,
            backgroundColor: '#FFFFFFD9',
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="User Name"
            style={style.input}
            placeholderTextColor="#000000E6"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Email Id"
            style={style.input}
            placeholderTextColor="#000000E6"
            onChangeText={handleEmailChange}
          />
          <TextInput
            placeholder="Password"
            style={style.input}
            placeholderTextColor="#000000E6"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {
              Auth.signUp(name, email, password);
            }}
            style={style.Button}
            disabled={!email || !password || !name}>
            <Text style={style.Text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Text style={style.text}>Already have an account?{" "}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{color:'#0086ff'}}>Sign In here!</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const style = StyleSheet.create({
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '93%',
    alignSelf: 'center',
    elevation: 4,
    backgroundColor: '#0086ff',
    height: 48,
    borderRadius: 6,
  },
  Text: {
    color: '#fff',
  },
  text: {
    color: '#000',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    width: '93%',
    alignSelf: 'center',
    color: '#000',
    padding: 10,
  },
  container: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
