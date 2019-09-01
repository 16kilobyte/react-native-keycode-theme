import { ThemedComponentProps } from 'react-native-ui-kitten';

export interface BottomTabProps extends ThemedComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}
