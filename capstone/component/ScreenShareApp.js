import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { io } from 'socket.io-client';

const ScreenShareApp = () => {
 const [screenData, setScreenData] = useState(null);

 useEffect(() => {
    const socket = io('http://192.168.0.6:8000/ws');

    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('start_screen_share');
    });

    socket.on('screen_data', (data) => {
      setScreenData(`data:image/png;base64,${data}`);
    });

    return () => {
      socket.disconnect();
    };
 }, []);

 return (
    <View>
      {screenData && <Image source={{ uri: screenData }} style={{ width: '100%', height: '100%' }} />}
    </View>
 );
};

export default ScreenShareApp;