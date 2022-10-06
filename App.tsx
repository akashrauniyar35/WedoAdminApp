/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './src/redux/store';
import { Provider } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};




const isAuthenticated = () => {
}

const App = () => {

  const [savedToken, setSavedToken] = useState();




  const getAccessToken = async () => {
    console.log('trying')
    try {
      const value = await AsyncStorage.getItem('@access_Token')

      if (value !== undefined) {
        console.log("GET ASYNC STORAGE ACCESS", value);
        setSavedToken(value)
        console.log("ASYNC STORAGE ACCESS", value, 'sssss', savedToken);
        // value previously stored
      } else {
        setSavedToken(value)
        console.log("isAuth", savedToken)
      }


    } catch (e) {
      // error reading value
    }
  }


  const AppView = () => {
    // const isAuth = 
    let isAuth = useSelector((state: any) => state.authReducer.isAuthenticated);
    console.log("SLELCTOR APP", savedToken, isAuth)
    // return < AuthenticationStack />
    return isAuth ? <Drawer /> : <AuthenticationStack />
    // return savedToken === undefined ? <AuthenticationStack /> : isAuth ? <Drawer /> : savedToken !== undefined ? <Drawer /> : <AuthenticationStack />
    // return savedToken === "" ? <AuthenticationStack /> : isAuth ? <AuthenticationStack /> : <Drawer />
  }


  useEffect(() => {
    getAccessToken()
    isAuthenticated()
  }, [savedToken])


  return (
    <NavigationContainer theme={navTheme}>
      <Provider store={store}>
        <AppView />
        {/* {isAuth === "" ? <AuthenticationStack /> : <Drawer />} */}

      </Provider>
    </NavigationContainer>
  );




};



const styles = StyleSheet.create({
});

export default App;
