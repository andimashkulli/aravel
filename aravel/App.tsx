import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import MyTicketsScreen from './screens/MyTicketsScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeIcon from 'react-native-heroicons/solid/HomeIcon'
import SearchIcon from 'react-native-heroicons/solid/MagnifyingGlassIcon'
import TicketIcon from 'react-native-heroicons/solid/TicketIcon'
import ProfileIcon from 'react-native-heroicons/outline/UserCircleIcon'
import TicketsScreen from './screens/TicketsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
export default function App() {

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen  name="Tickets" component={TicketsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

// Define your tab-based screens
function TabNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      tabBarStyle:{height:110},
      tabBarActiveTintColor: '#164B60',
      tabBarInactiveTintColor: '#cccccc',
      tabBarLabelStyle:{fontSize:12}
      }}
    >
    <Tab.Screen  options={{
  tabBarIcon:({}) => (
    <HomeIcon size={'30px'} color={'#164B60'} />
    ),
}} name="Home"  component={HomeStack} />
<Tab.Screen options={{
  tabBarIcon:({}) => (
    <SearchIcon size={'30px'} color={'#164B60'} />
    ),
}}  name="Search" component={SearchScreen} />
<Tab.Screen options={{
  tabBarIcon:({}) => (
    <TicketIcon size={'30px'} color={'#164B60'} />
    ),
}} name="MyTicket" component={MyTicketsScreen} />
<Tab.Screen options={{
  tabBarIcon:({}) => (
    <ProfileIcon size={'30px'} color={'#164B60'} />
    ),
}} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


  return (
    <Provider 
    store={createStore(
      reducers
    )}>
    <NavigationContainer>
      <TailwindProvider>
  <TabNavigator/>
      </TailwindProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '	#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Text:{
    fontFamily:'Arial'
  }
});


