import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';

const SafeArea: React.FC<{} & ThemedComponentProps> = ({
  children,
  themedStyle,
}) => {
  return <SafeAreaView style={themedStyle.container}>{children}</SafeAreaView>;
};

export default withStyles(SafeArea, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
}));
