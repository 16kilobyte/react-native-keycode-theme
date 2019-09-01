import React, { Component } from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import FastImage from 'react-native-fast-image';

import RootNavigation from './navigation/RootNavigation';
import { images } from './theme';

interface AppState {
  isReady: boolean;
}

class App extends Component<{}, AppState> {
  public state: AppState = {
    isReady: false,
  };

  public async componentDidMount() {
    this.setState({
      isReady: true,
    });
  }

  public render(): JSX.Element {
    const { isReady } = this.state;

    return (
      <>
        {!isReady && (
          <FastImage
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
            source={images.splash}
          />
        )}
        {isReady && (
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <RootNavigation />
          </ApplicationProvider>
        )}
      </>
    );
  }
}

export default App;
