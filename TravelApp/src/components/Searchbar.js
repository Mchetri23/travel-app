import React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import apiKey from "../services/apiKey";

const SearchBar = ({ selectedPlace, setSelectedPlace, lng, setLng, lat, setLat }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <GooglePlacesAutocomplete
        placeholder="Search..."
        onPress={(data, details) => {
          setSelectedPlace(data.description);
          setLng(details?.geometry?.location?.lng)
          setLat(details?.geometry?.location?.lat)
        }}
        query={{
          key: apiKey,
          language: "en",
        }}
        fetchDetails={true}
        onFail={(error) => console.log(error)}
        styles={{
          textInputContainer: {
            color: '#000',
            alignSelf: 'center',
          },
          textInput: {
            borderWidth: 1,
            borderColor: '#d4d4d4',
            fontSize: 12,
          },
          listView: {
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 0,
            zIndex: 3,
          },
        }}
        renderTextInput={(props) => (
          <View style={styles.inputContainer}>
            <Text style={styles.placeholder}>Type a place</Text>
            <TextInput {...props} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholder: {
    color: '#000', // Placeholder text color
    marginLeft: 10,
  },
});
