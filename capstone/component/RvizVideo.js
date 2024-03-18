import React from 'react';
import Video from 'react-native-video';

const RVizVideo = () => {
 return (
    <Video
      source={{uri: "http://192.168.0.6:8080/8).mp4"}}
      style={{width: '100%', height: 300}}
      controls={true}
    />
 );
};

export default RVizVideo;