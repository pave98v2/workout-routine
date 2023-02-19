
import { StyleSheet } from 'react-native';
import Workout from "./components/workout/Workout";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Creator from './components/creator/Creator';
import Home from './components/home/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Workout"
          component={Workout}
          options={{ title: 'Current workout' }}
        />
        <Stack.Screen
          name="Create"
          component={Creator}
          options={{ title: 'Create' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
