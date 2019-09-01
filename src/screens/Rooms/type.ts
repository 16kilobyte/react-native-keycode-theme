import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

export interface RoomsProps {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}
