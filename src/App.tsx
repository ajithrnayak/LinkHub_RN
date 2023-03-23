/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Colors from './colors';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import LinkList from './linklist';
import Header from './header';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLinkPress = (url: string) => {
    console.log(`Link pressed: ${url}`);
  };
  return (
    <SafeAreaView style={[backgroundStyle, $container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={$content}>
        <Header />
        <LinkList onPressLink={handleLinkPress} />
      </View>
    </SafeAreaView>
  );
}

export default App;

const $container: ViewStyle = {
  flex: 1,
};

const $content: ViewStyle = {
  flex: 1,
};
