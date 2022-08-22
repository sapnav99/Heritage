import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Feed from '../screens/Feed';
import Milk from '../screens/Milk';
import cattle from '../screens/Cattle';
import Store from '../screens/Store';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Milk" component={Milk} />
      <Tab.Screen name="Cattle" component={cattle} />
      <Tab.Screen name="Store" component={Store} />
    </Tab.Navigator>
  );
}