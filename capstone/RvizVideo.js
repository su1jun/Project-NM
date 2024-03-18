import React from 'react';
import { Video } from 'expo-av';

const VideoFile = () => {
 return (
    <Video
      source={{uri: "http://192.168.0.6:8080/8).mp4"}}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '80%', // 비디오의 너비를 설정합니다.
        height: '60%', // 비디오의 높이를 설정합니다.
      }}
      useNativeControls
      resizeMode="cover"
      shouldPlay
    />
 );
};

export default VideoFile;
