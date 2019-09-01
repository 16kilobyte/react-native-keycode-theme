import { Dimensions } from 'react-native';
import { ThemeType } from "react-native-ui-kitten";
import { fonts } from '../../theme';

const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 32;

export default (theme: ThemeType) => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 120,
    width: itemWidth,
    borderRadius: 8,
    margin: 8,
    padding: 100,
    backgroundColor: theme['background-basic-color-3'],
  },
  title: {
    fontFamily: fonts.type.mbGrotesk.regular,
    color: theme['text-basic-color'],
  },
  fill: {
    color: theme['background-primary-color-1'],
  },
  icon: {
    height: 40,
    width: 40,
  },
});
