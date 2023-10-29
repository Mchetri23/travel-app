import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FlightIcon from '../assets/flightIcon.png';
import HomeIoon from '../assets/Home';

const Options = ({route, navigation}) => {
  const data = route?.params;

  const split = data[1].split(',');
  const RoundAddress = split[split.length - 2].trim();

  const split2 = data[0].split(',');
  const GoAddress = split2[split2.length - 2].trim();

  const tickets = [
    {
      Transport: 'Flight',
      Start: GoAddress,
      End: RoundAddress,
      StartDate: data[2],
      EndDate: data[3],
      Price: 'Rs 20000',
    },
    {
      Transport: 'Flight',
      Start: GoAddress,
      End: RoundAddress,
      StartDate: data[2],
      EndDate: data[3],
      Price: 'Rs 20000',
    },
    {
      Transport: 'Flight',
      Start: GoAddress,
      End: RoundAddress,
      StartDate: data[2],
      EndDate: data[3],
      Price: 'Rs 20000',
    },
    {
      Transport: 'Flight',
      Start: GoAddress,
      End: RoundAddress,
      StartDate: data[2],
      EndDate: data[3],
      Price: 'Rs 20000',
    },
    {
      Transport: 'Flight',
      Start: GoAddress,
      End: RoundAddress,
      StartDate: data[2],
      EndDate: data[3],
      Price: 'Rs 20000',
    },
    {
      Transport: 'Flight',
      Start: GoAddress,
      End: RoundAddress,
      StartDate: data[2],
      EndDate: data[3],
      Price: 'Rs 20000',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: '30%', backgroundColor: '#02929a', paddingTop: 30}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={{
            position: 'absolute',
            top: 30,
            left: 10,
            backgroundColor: '#fff',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}>
          <HomeIoon width="24" height="24" />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{fontSize: 23, color: '#fff', fontWeight: 'bold'}}>
            {GoAddress} -{' '}
          </Text>
          <Text style={{fontSize: 23, color: '#fff', fontWeight: 'bold'}}>
            {RoundAddress}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            width: '93%',
          }}>
          <Text style={{fontSize: 12, color: '#fff'}}>From {data[2]}</Text>
          <Text style={{fontSize: 12, color: '#fff'}}>To {data[3]}</Text>
        </View>
      </View>
      <View
        style={{
          height: '90%',
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          position: 'absolute',
          width: '100%',
          top: '15%',
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}>
        <View style={{alignSelf: 'center', marginTop: 20, marginBottom: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#202020'}}>
            {tickets?.length} flights are avaiable to your destination
          </Text>
        </View>
        <ScrollView style={{maxHeight: '85%'}}>
          {tickets?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '93%',
                  alignSelf: 'center',
                  marginTop: 5,
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 6,
                  elevation: 4,
                  backgroundColor: '#fff',
                  gap: 10,
                }}>
                <View
                  style={{flexDirection: 'row', alignSelf: 'center', justifyContent:'space-between', width: '100%'}}>
                  <Text
                    style={{
                      fontSize: 23,
                      color: '#202020',
                      fontWeight: 'bold',
                    }}>
                    {item?.Start}
                  </Text>
                  <Image source={FlightIcon} style={{width: 40, height: 40}} />
                  <Text
                    style={{
                      fontSize: 23,
                      color: '#202020',
                      fontWeight: 'bold',
                    }}>
                    {item?.End}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 12, color: '#202020'}}>
                    From {item?.StartDate}
                  </Text>
                  <Text style={{fontSize: 12, color: '#202020'}}>
                    To {item?.EndDate}
                  </Text>
                </View>
                <Text style={{fontSize: 13, color: '#202020'}}>
                  Transport type: {item?.Transport}
                </Text>
                <Text style={{fontSize: 12, color: '#202020'}}>
                  Total price: {item?.Price}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Options;
