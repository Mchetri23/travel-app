import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { Auth } from '../services';
import auth from '@react-native-firebase/auth';
import SearchBar from '../components/Searchbar';
import BottomModal from '../components/BottomModal';
import { Calendar } from 'react-native-calendars';

const Dashboard = ({ navigation }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [selectedStartPlace, setSelectedStartPlace] = useState('');
  const [selectedEndPlace, setSelectedEndPlace] = useState('');

  const selected =
    selectedStartDate !== undefined ? selectedStartDate : selectedEndDate;

  console.log(selectedStartDate, selectedEndDate, 'datess');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
        enabled
        keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 0}
      >
        <View
          style={{
            width: '93%',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            backgroundColor: '#fff',
            elevation: 4,
            borderColor: '#e6e6e6',
            borderRadius: 6,
          }}
        >
          <View style={{ gap: 10, maxHeight: '40%' }}>
            <Text style={{ color: '#202020', fontStyle: 'italic' }}>
              Select your starting destination!
            </Text>
            <SearchBar
              selectedPlace={selectedStartPlace}
              setSelectedPlace={setSelectedStartPlace}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ color: '#202020', fontStyle: 'italic' }}>
              Where do you want to go?
            </Text>
            <SearchBar
              selectedPlace={selectedEndPlace}
              setSelectedPlace={setSelectedEndPlace}
            />
          </View>
          <Text style={{ color: '#202020', fontStyle: 'italic' }}>
            Select Dates
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={style.datepicker}
              onPress={() => {
                setShowPicker(true);
                setStartDateOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: '#202020' }}>
                {selectedStartDate !== '' ? selectedStartDate : 'Start Date'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.datepicker}
              onPress={() => {
                setShowPicker(true);
                setEndDateOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: '#202020' }}>
                {selectedEndDate !== '' ? selectedEndDate : 'End Date'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#0086ff',
              justifyContent: 'center',
              alignItems: 'center',
              height: 48,
              borderRadius: 6,
            }}
            disabled={
              !selectedStartPlace ||
              !selectedEndPlace ||
              !selectedStartDate ||
              !selectedEndDate
            }
            onPress={() => {
              navigation.navigate('Transport', [
                selectedStartPlace,
                selectedEndPlace,
                selectedStartDate,
                selectedEndDate,
              ]);
            }}
          >
            <Text style={{ color: '#fff' }}>Search for options</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            flex: 0.34,
            gap: 10,
          }}
        >
          <Text style={{ color: '#202020', fontSize: 12 }}>
            Unable to decide, Start with an example{' '}
          </Text>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: '#fff', fontSize: 12 }}>Go to Home</Text>
          </TouchableOpacity>
        </View>

        <BottomModal
          checked={true}
          styles={style}
          visible={showPicker}
          onClose={() => setShowPicker(false)}
        >
          <Calendar
            hideExtraDays
            style={{
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#DEDEDE',
              marginTop: 20,
            }}
            onDayPress={(day) => {
              if (startDateOpen && !selectedStartDate) {
                setSelectedStartDate(day.dateString);
                setEndDateOpen(true);
              } else if (endDateOpen && !selectedEndDate) {
                setSelectedEndDate(day.dateString);
                setStartDateOpen(false);
              }
            }}
            markedDates={{
              [selectedStartDate]: {
                selected: true,
                disableTouchEvent: true,
              },
              [selectedEndDate]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
          {selectedStartDate && selectedEndDate && (
            <TouchableOpacity
              style={{
                backgroundColor: '#0086ff',
                justifyContent: 'center',
                alignItems: 'center',
                height: 48,
                borderRadius: 6,
                marginTop: 10,
              }}
              onPress={() => setShowPicker(false)}
            >
              <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>
          )}
        </BottomModal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Dashboard;

const style = StyleSheet.create({
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoldText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft:
      Dimensions.get('window').width -
      Dimensions.get('window').width * 0.95,
  },
  button: {
    width: 100,
    height: 36,
    backgroundColor: '#0086ff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datepicker: {
    borderWidth: 1,
    height: 30,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e6e6e6',
    borderRadius: 6,
  },
  modalView: {
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 16,
    minHeight: '32%',
    borderColor: '#00000080',
    elevation: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});
