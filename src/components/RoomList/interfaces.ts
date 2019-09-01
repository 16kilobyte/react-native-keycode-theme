import { ThemedComponentProps } from 'react-native-ui-kitten';
import { Room } from '../../types/common';

export interface RoomListProps extends ThemedComponentProps {
  rooms: Room[];
}

export interface RoomListRenderer {
  item: Room;
}
