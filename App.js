import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import SendRequestScreen from './src/screens/SendRequestScreen';
import CardScreen from './src/screens/CardScreen';

export default App = () => {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      paddingBottom: 6,
    }
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 24 

      switch (route.name) {
        case "Cards":
          icon = "credit-card";
          break;
        case "SendRequest":
          icon = "send";
          break;

        default:
          icon = "dashboard";
          break;
      }

      return <MaterialIcons name={icon} size={size} color={color} />;
    }
  })

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen 
          name="SendRequest" 
          component={SendRequestScreen} 
          options={{title: "Send & Request"}}
        />
        <TabStack.Screen 
          name="Cards" 
          component={CardScreen}
          options={{title: "My Cards"}}
        />
      </TabStack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Touch" component={TouchScreen} />
      </AppStack.Navigator>  
    </NavigationContainer>
  );
}