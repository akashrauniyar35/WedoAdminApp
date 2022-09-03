/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/pages/Home/Home';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer'
import AuthenticationStack from './src/navigation/AuthenticationStack'




const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {


  return (
    <NavigationContainer theme={navTheme}>
      <Drawer />
      {/* <AuthenticationStack /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
