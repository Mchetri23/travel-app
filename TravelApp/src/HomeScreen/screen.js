import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import BottomModal from '../components/BottomModal';
import {Calendar} from 'react-native-calendars';

const HomeScreen = () => {
  const [marked, setMarked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/backgr.jpeg')}
        style={styles.backgroundImage}>
        <View style={styles.content}>
        </View>
        
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default HomeScreen;
