import { ThemeType } from "react-native-ui-kitten";

export default (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['background-basic-color-1'],
  },
});
