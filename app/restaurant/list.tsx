import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Assuming you have a list of restaurants from your API or local state
const restaurants = [
  { id: 1, name: 'Restaurant A' },
  { id: 2, name: 'Restaurant B' },
  // ... more restaurants
];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListScreen;