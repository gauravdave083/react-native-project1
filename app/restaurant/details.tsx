import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';

export default function RestaurantDetailsScreen() {
  const { restaurant } = useSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Restaurant Name:</Text>
      <Text style={styles.value}>{restaurant?.name}</Text>
      {/* More fields */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F00',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
});
