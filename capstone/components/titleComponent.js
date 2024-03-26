import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TitleComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleUser = () => {
    console.log(`User for: ${searchText}`);
      setIsDrawerOpen(true);
  };

  const handleSearch = (searchText) => {
    console.log(`Searching for: ${searchText}`);
  };

 return (
    <View style={styles.appBar}>
      <TouchableOpacity onPress={handleUser}>
        <Ionicons name="person-circle" size={24} color="black" />
      </TouchableOpacity>

      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onFocus={onSearch}
      />

      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
 },
 searchBar: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
 },
});

export default TitleComponent;