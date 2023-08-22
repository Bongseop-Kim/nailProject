import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from '../iconComponents/HomeIcon';
import {SearchIcon} from '../iconComponents/SearchIcon';
import {UserIcon} from '../iconComponents/UserIcon';
import HomeScreen from './HomeScreen';
import UserMenuScreen from './UserMenuScreen';
import ScanScreen from './ScanScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          title: '진단 하기',
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="UserMenu"
        component={UserMenuScreen}
        options={{
          title: '사용자 메뉴',
          tabBarIcon: UserIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
