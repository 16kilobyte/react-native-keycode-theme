import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  withStyles,
  ThemeType,
} from 'react-native-ui-kitten';
import { Icon } from 'react-native-eva-icons';

import { bottomTabMenu } from '../../constants';
import { fonts } from '../../theme';

import { BottomTabProps } from './interfaces';

class BottomTab extends Component<BottomTabProps> {
  public render() {
    const { selectedIndex, onTabSelect, themedStyle } = this.props;

    return (
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => onTabSelect(index)}
        style={themedStyle.container}
        indicatorStyle={themedStyle.indicator}
      >
        {this.createBottomNavigationTabs()}
      </BottomNavigation>
    );
  }

  private createBottomNavigationTabs() {
    const { selectedIndex, onTabSelect, themedStyle } = this.props;

    return bottomTabMenu.map((menu, index) => {
      const selected = selectedIndex === index;

      return (
        <BottomNavigationTab
          selected={selected}
          key={index}
          title={menu.title}
          style={themedStyle.tabItemContainer}
          titleStyle={[
            themedStyle.tabItemTitle,
            this.handletabItemTitleStyle(selected, themedStyle),
          ]}
          icon={() => (
            <Icon
              name={`${menu.icon}${selected ? '' : '-outline'}`}
              width={20}
              height={20}
              fill={this.handletabItemIconStyle(selected, themedStyle)}
            />
          )}
        />
      );
    });
  }

  private handletabItemTitleStyle(selected: boolean, themedStyle: any) {
    return selected
      ? themedStyle.selectedTabItemTitle
      : themedStyle.inactiveTabItemTitle;
  }

  private handletabItemIconStyle(selected: boolean, themedStyle: any) {
    return selected
      ? themedStyle.selectedTabItemIcon.color
      : themedStyle.inactiveTabItemIcon.color;
  }
}

export default withStyles(BottomTab, (theme: ThemeType) => ({
  container: {
    minHeight: 100,
    backgroundColor: theme['background-basic-color-1'],
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  tabItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemTitle: {
    fontFamily: fonts.type.mbGrotesk.regular,
    fontSize: fonts.size.small,
    marginTop: 8,
  },
  selectedTabItemTitle: {
    color: theme['background-primary-color-1'],
  },
  inactiveTabItemTitle: {
    color: theme['text-hint-color'],
  },
  selectedTabItemIcon: {
    color: theme['background-primary-color-1'],
  },
  inactiveTabItemIcon: {
    color: theme['text-hint-color'],
  },
}));
