import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MapComponent = () => {
 const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
 });

 return (
    <MapView
      style={styles.map}
      region={region}
      onRegionChangeComplete={setRegion}
    />
 );
};

const styles = StyleSheet.create({
 map: {
    flex: 1,
 },
});

export default MapComponent;
