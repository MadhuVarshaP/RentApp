import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Description from './src/screens/Description';

const App = () => {
  return (
    <View>
      <Home />
      <Description />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
