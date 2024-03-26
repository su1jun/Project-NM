import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapComponent } from '../components/mapComponent';
import { LowerComponent } from '../components/lowerComponent';
import { TitleComponent } from '../components/titleComponent';

export default function HomeScreen({ navigation }) {
 return (
    <View style={styles.container}>
      <TitleComponent />
      <MapComponent />
      <LowerComponent navigation={navigation}/>
    </View>
 );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#fff',
  },
 });
