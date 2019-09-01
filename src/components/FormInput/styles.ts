import { ThemeType } from "react-native-ui-kitten";

import { fonts } from '../../theme';

export default (theme: ThemeType) => ({
  container: {
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-2'],
  },
  label: {
    color: theme['text-hint-color'],
    fontSize: fonts.size.small,
    fontFamily: fonts.type.mbGrotesk.regular,
  },
  text: {
    color: theme['text-basic-color'],
    fontSize: fonts.size.normal,
    fontFamily: fonts.type.mbGrotesk.regular,
  },
});
