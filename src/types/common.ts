import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { FastImageSource } from 'react-native-fast-image';

export interface BottomTabNavigationProps {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

export interface Room {
  title: string;
  icon: FastImageSource;
  empty?: boolean;
  key?: string;
}
