import React, { Component } from 'react';
import { ListItem, Text, withStyles } from 'react-native-ui-kitten';

import { RoomListItemProps } from './interfaces';
import styles from './styles';
import FastImage from 'react-native-fast-image';

class RoomListItem extends Component<RoomListItemProps> {
  public render() {
    const { title, icon, themedStyle } = this.props;

    return (
      <ListItem style={themedStyle.container}>
        <FastImage
          source={icon}
          style={themedStyle.icon}
        />
        <Text category="h6" style={themedStyle.title}>
          {title}
        </Text>
      </ListItem>
    );
  }
}

export default withStyles(RoomListItem, styles);
