import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { fonts, colors } from '../theme';
import Signup from '../screens/Signup';
import Rooms from '../screens/Rooms';
import Todos from '../screens/Todos';
import Shop from '../screens/Shop';
import Messages from '../screens/Messages';
import Account from '../screens/Account';

import BottomTab from '../components/BottomTab';
import { BottomTabNavigationProps } from '../types/common';

const BottomTabNavigation: React.FC<BottomTabNavigationProps> = ({
  navigation,
}) => {
  return (
    <BottomTab
      selectedIndex={navigation.state.index}
      onTabSelect={selectedIndex => {
        const routeName = navigation.state.routes[selectedIndex].routeName;
        navigation.navigate(routeName);
      }}
    />
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Rooms,
    Todos,
    Shop,
    Messages,
    Account,
  },
  {
    tabBarComponent: BottomTabNavigation,
    navigationOptions: ({ navigation }: BottomTabNavigationProps) => ({
      title: navigation.state.routes[navigation.state.index].routeName.toLocaleUpperCase(),
    }),
  },
);

const MainNavigator = createStackNavigator(
  {
    Signup,
    Tabs: TabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.bgLight,
      },
      headerTitleStyle: {
        fontFamily: fonts.type.mbGrotesk.regular,
        fontSize: fonts.size.normal,
        color: colors.textDefault,
      },
      headerBackTitle: null,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  MainNavigator,
});

export default createAppContainer(AppNavigator);
