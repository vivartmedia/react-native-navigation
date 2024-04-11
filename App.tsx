
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DataScreen from './Screens/DataScreen';
import { AppNativeParamsList } from './type';

const Stack = createNativeStackNavigator<AppNativeParamsList>()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        <Stack.Screen name='DataScreen' component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


