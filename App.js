import React from 'react';
import {View, StyleSheet, StatusBar, Text  } from 'react-native';
import CarList from './components/CarList';
import Header from './components/Header';

const App = () => {
  

  return (
    <View style={styles.container}>
      <Header/>
      <CarList/>
      <StatusBar style="auto"/>
    </View>

  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
  
});

export default App;