import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false
        }}
      >
        <Stack.Screen 
          name='Home'
          component={Home}
          />
        <Stack.Screen 
          name='..'
          component={Login}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen 
          name='...'
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
