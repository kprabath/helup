/* eslint-disable react/no-unstable-nested-components */
// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import IconView from '../components/IconView';
import {IconSet} from '../utils/Types';
import MyworkScreen from '../screens/MyWorkScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const renderTabBarIcon = ({route}: any) => ({
    tabBarIcon: ({focused, color, size}: any) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'My Work') {
        iconName = focused ? 'briefcase' : 'briefcase-outline';
      } else if (route.name === 'Messages') {
        iconName = focused ? 'chatbox' : 'chatbox-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      } else if (route.name === 'Requests') {
        iconName = focused ? 'send' : 'send-outline';
      }

      // You can return any component that you like here!
      return (
        <IconView
          name={iconName as IconSet}
          type={IconSet.IONICON}
          size={size}
          color={color}
        />
      );
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={renderTabBarIcon}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="My Work"
          component={MyworkScreen}
        />
        <Tab.Screen name="Messages" component={MyworkScreen} />
        <Tab.Screen name="Requests" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
