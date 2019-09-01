import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  withStyles,
  Text,
} from 'react-native-ui-kitten';

import styles from './styles';
import i18n from '../../i18n';

const Todos: React.FC<{} & ThemedComponentProps> = ({ themedStyle }) => {
  return (
    <View style={themedStyle.container}>
      <Text>{i18n.t('todos.title')}</Text>
    </View>
  );
};

export default withStyles(Todos, styles);
