import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.grandeText}>10</Text>
          <Text style={styles.ventiText}>Kolkata</Text>
      </View>
      <View>
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
