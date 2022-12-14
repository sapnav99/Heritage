import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Appointments from './src/Drawer/Appointments';
import Farmer from './src/Drawer/Farmer';
import Feedback from './src/Drawer/Feedback';
import Language from './src/Drawer/Language';
import Order from './src/Drawer/Order';
import Password from './src/Drawer/Password';
import Service from './src/Drawer/Service';
import Signout from './src/Drawer/Signout';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Appointments" component={Appointments} />
      <Drawer.Screen name="Orders" component={Order} />
      <Drawer.Screen name="Farmers" component={Farmer} />
      <Drawer.Screen name="Languages" component={Language} />
      <Drawer.Screen name="Customer Service" component={Service} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Change Password" component={Password} />
      <Drawer.Screen name="Sign Out" component={Signout} />
    </Drawer.Navigator>
    </NavigationContainer>
  );

}



export default App;