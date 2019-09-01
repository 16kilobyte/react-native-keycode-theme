import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams
} from 'react-navigation'

export interface SignupProps {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >
  onFormSubmit: (values: any) => void
}
