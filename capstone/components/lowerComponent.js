import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LowerComponent ({ navigation }) {
  const [activeTab, setActiveTab] = useState('Map');

  const onTabPress = (tab) => {
    console.log(`Tab ${tab} pressed`);
    
    setActiveTab(tab);
    navigation.navigate(tab);
  };

 return (
    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => onTabPress('Chat')}>
        <Text style={[styles.tabText, activeTab === 'Chat' && styles.activeTab]}>Chat</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => onTabPress('Map')}>
        <Text style={[styles.tabText, activeTab === 'Map' && styles.activeTab]}>Map</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onTabPress('List')}>
        <Text style={[styles.tabText, activeTab === 'List' && styles.activeTab]}>List</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
 },
 tabText: {
    color: 'black',
 },
 activeTab: {
    color: 'blue',
 },
});
