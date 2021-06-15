import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  PermissionsAndroid,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Home = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [locationStatus, setLocationStatus] = useState('Permission Denied');

  
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This Home needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    useEffect(() => {
      requestLocationPermission();
  });

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      (error) => {
        setLocationStatus(error.message);
        console.log(locationStatus);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.grandeText}>10</Text>
          <Text style={styles.ventiText}>Kolkata</Text>
      </View>
      <View>
        <View style={styles.dayDetails}>
        <Text style={styles.tallText}>{latitude}</Text>
        <Text style={styles.tallText}>{longitude}</Text>
        </View>
        <View style={styles.dayDetails}>
        <Text style={styles.tallText}>Monday</Text>
        <Text style={styles.tallText}>10</Text>
        </View>
        <View style={styles.dayDetails}>
        <Text style={styles.tallText}>Monday</Text>
        <Text style={styles.tallText}>10</Text>
        </View>
        <View style={styles.dayDetails}>
        <Text style={styles.tallText}>Monday</Text>
        <Text style={styles.tallText}>10</Text>
        </View>
        <View style={styles.dayDetails}>
        <Text style={styles.tallText}>Monday</Text>
        <Text style={styles.tallText}>10</Text>
        </View>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    height:'100%', 
    justifyContent:'space-between'
  },
  header:{
    alignItems:'center', 
    marginTop:'5%'
  },
  grandeText:{
    fontSize:150
  },
  ventiText:{
    fontSize:30
  },
  tallText:{
    fontSize:25
  },
  dayDetails:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    padding:'5%', 
    borderTopWidth:1, 
    borderTopColor:'#000'
  }
});

Home.navigationOptions = {
  headerShown: false
};

export default Home;
