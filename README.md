# 📱 React Native Basics

React Native is a popular framework for building cross-platform mobile applications using JavaScript and React. This guide covers the fundamental concepts and components you need to know to get started with React Native development. Let's dive in! 🏊‍♂️

## 📋 Table of Contents
1. [Setting Up the Environment](#setting-up-the-environment)
2. [Core Components](#core-components)
3. [Styling in React Native](#styling-in-react-native)
4. [State and Props](#state-and-props)
5. [Handling User Input](#handling-user-input)
6. [Navigation](#navigation)

## 🛠️ Setting Up the Environment

Before you start coding, let's set up your development environment:

1. 📥 Install Node.js and npm (Node Package Manager)
2. 🖥️ Install the Expo CLI: `npm install -g expo-cli`
3. 🆕 Create a new project: `expo init MyFirstProject`
4. 📂 Navigate to the project directory: `cd MyFirstProject`
5. 🚀 Start the development server: `expo start`

## 🧱 Core Components

React Native provides a set of core components that map directly to native UI elements:

- 📦 `View`: A container component (similar to a `div` in web development)
- 📝 `Text`: For displaying text
- 🖼️ `Image`: To show images
- 📜 `ScrollView`: A scrollable container
- 📋 `FlatList`: An efficient scrollable list
- ⌨️ `TextInput`: For text input fields
- 👆 `TouchableOpacity`: For creating touchable elements with opacity feedback

Example:

```jsx
import React from 'react';
import { View, Text, Image } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text>👋 Hello, React Native!</Text>
      <Image source={require('./image.png')} />
    </View>
  );
};
```

## 🎨 Styling in React Native

Styling in React Native is done using JavaScript objects that resemble CSS:

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

// Usage
<View style={styles.container}>
  <Text style={styles.text}>🎉 Styled Text</Text>
</View>
```

## 🔄 State and Props

React Native uses the same concepts of state and props as React:

- 📨 Props: Passed to a component from its parent
- 📊 State: Managed within a component

Example using both:

```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <View>
      <Text>🔢 Count: {count}</Text>
      <Button title="➕ Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

// Usage
<Counter initialCount={0} />
```

## 🖱️ Handling User Input

React Native provides components for handling user input:

```jsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const InputExample = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="✍️ Enter text here"
      />
      <Button title="📤 Submit" onPress={() => console.log(text)} />
    </View>
  );
};
```

## 🧭 Navigation

For navigation between screens, you can use the React Navigation library:

1. 📥 Install React Navigation: `npm install @react-navigation/native`
2. 🔗 Install dependencies: `expo install react-native-screens react-native-safe-area-context`
3. 📚 Install the stack navigator: `npm install @react-navigation/stack`

Example usage:

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

This guide covers the basics of React Native development. As you progress, you'll want to explore more advanced topics such as APIs, performance optimization, and platform-specific code. Keep coding and have fun! 🚀👨‍💻👩‍💻
