import React, { Component } from 'react';
import { View } from 'react-native';
import { withStyles, List } from 'react-native-ui-kitten';

import RoomListItem from '../RoomListItem';

import { Room } from '../../types/common';
import { formatListData } from '../../utils';
import { RoomListProps, RoomListRenderer } from './interfaces';
import styles from './styles';

class RoomList extends Component<RoomListProps> {
  public render() {
    const { rooms, themedStyle } = this.props;

    return (
      <List
        data={formatListData(rooms, 2)}
        numColumns={2}
        renderItem={({ item }: RoomListRenderer) => this.handleRenderItem(item, themedStyle)}
        style={themedStyle.container}
      />
    );
  }

  private handleRenderItem(item: Room, themedStyle: any) {
    return item.empty ? (
      <View style={themedStyle.container} />
    ) : (
      <RoomListItem {...item} />
    );
  }
}

export default withStyles(RoomList, styles);
