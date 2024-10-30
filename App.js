import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/StackNavigator/Home';
import About from './src/StackNavigator/About';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerBackTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <Button title="Info" onPress={() => alert("This is a button")} />
        ),
        contentStyle: {
          backgroundColor: "e8e4f3"
        }
      }}>
        <Stack.Screen name='Home' component={Home} options={{
          title: 'Home Screen',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerBackTitleStyle: { fontWeight: "bold" },
          // headerRight: () => (
          //   <Button title="Info" onPress={() => alert("This is a button")} />
          // ),
          // contentStyle:{
          //   backgroundColor:"e8e4f3"
          // }
        }} />
        <Stack.Screen name='About' component={About} initialParams={{ name: "Guest" }}  />
        {/* options={({ route }) => ({
          title: route.params.name,
        })} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}