import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Restaurant App</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Add Restaurant" onPress={() => router.push('/restaurant/form')} />
        <Button style={styles.button} title="View Restaurants" onPress={() => router.push('/restaurant/list')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    marginHorizontal: 10, // Add horizontal margin for spacing
  },
});