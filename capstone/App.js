import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RVizVideo from './RvizVideo'; // RVizVideo 컴포넌트를 임포트합니다.
import ScreenShareApp from './component/ScreenShareApp'

export default function App() {
 return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ScreenShareApp/>
      <StatusBar style="auto" />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
});