import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Restaurant App</Text>
      <Button title="Add Restaurant" onPress={() => router.push('/restaurant/form')} />
    </View>
  );
}
