import { ThemeType } from 'react-native-ui-kitten';
import { fonts } from '../../theme';

export default (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: 36,
    backgroundColor: theme['background-basic-color-1'],
  },
  title: {
    fontFamily: fonts.type.mbGrotesk.light,
    color: theme['text-basic-color'],
    marginVertical: 8,
  },
  nameInputContainer: {
    flexDirection: 'row',
  },
  firstNameInputContainer: {
    flex: 1,
    marginRight: 5,
  },
  lastNameInputContainer: {
    flex: 1,
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: theme['background-primary-color-1'],
  },
  buttonText: {
    fontFamily: fonts.type.mbGrotesk.regular,
    fontSize: fonts.size.large,
    color: theme['text-control-color'],
    lineHeight: 18,
  },
});
