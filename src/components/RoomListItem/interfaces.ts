import { ThemedComponentProps } from 'react-native-ui-kitten';
import { FastImageSource } from 'react-native-fast-image';

export interface RoomListItemProps extends ThemedComponentProps {
  title: string;
  icon: FastImageSource;
}
