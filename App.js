import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  PermissionsAndroid,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
   const watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
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
        <Text style={styles.tallText}>{currentLatitude}</Text>
        <Text style={styles.tallText}>{currentLongitude}</Text>
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

App.navigationOptions = {
  headerShown: false
};

export default App;
