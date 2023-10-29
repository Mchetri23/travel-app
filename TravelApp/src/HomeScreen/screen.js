import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  FlatList,
  Image,
} from 'react-native';
import apiKey from '../services/apiKey';
import SearchBar from '../components/Searchbar';
import axios from 'axios';
import auth from '@react-native-firebase/auth'


const HomeScreen = () => {
  const [lng, setLng] = useState('');
  const [lat, setLat] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const key = apiKey;
  const endpoint =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  useEffect(() => {
    if (lat && lng) {
      const params = {
        key: apiKey,
        location: `${lat},${lng}`,
        radius: 5000, // in meters
        type: 'restaurant',
        keyword: 'recommended',
      };

      axios
        .get(endpoint, {params})
        .then(response => {
          const results = response.data.results;
          setRecommendedPlaces(results);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [lat, lng]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '93%', alignSelf: 'center'}}>
        <Text style={{fontSize: 20, color:'#202020'}}>Welcome, {auth()?.currentUser.displayName} !!</Text>
        <Text style={{fontSize: 12,marginBottom: 10, marginTop: 10, color:'#202020', fontStyle:'italic'}}>
          Search for your place, we will give you what's best in your area!
        </Text>
        <SearchBar
          lat={lat}
          setLat={setLat}
          lng={lng}
          setLng={setLng}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
        />
      </View>
      <FlatList
        data={recommendedPlaces}
        keyExtractor={item => item.place_id}
        renderItem={({item}) => (
          <View style={styles.gridItem}>
            <Text style={styles.placeName}>{item.name}</Text>
            <Text style={styles.openStatus}>
              {item.opening_hours && item.opening_hours.open_now
                ? 'Open'
                : 'Closed'}
            </Text>
            {item.photos && item.photos[0] && (
              <Image
                source={{
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=${key}`,
                }}
                style={styles.placeImage}
              />
            )}
            <Text style={styles.address}>{item.vicinity}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  gridItem: {
    margin: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'white',
    elevation: 4
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  openStatus: {
    color: 'green',
    fontSize: 12,
  },
  placeImage: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  address: {
    fontSize: 12,
  },
});

export default HomeScreen;
