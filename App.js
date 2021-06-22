/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Ruler from './Ruler';

const App = () => {
  const [value, setValue] = useState(34);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>How old are you?</Text>
      <View style={[styles.circle]}>
        <Text style={[styles.value]}>{value}</Text>
      </View>
      <View style={[styles.triangle]} />
      <Ruler onChange={setValue} />
      <View style={[styles.buttonContainer]}>
        <Button style={[styles.button]} title="Continue" color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 700,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    top: 100,
    left: 30,
    position: 'absolute',
    fontSize: 24,
    fontWeight: '600',
    color: '#535a60',
  },
  value: {
    fontSize: 40,
    fontWeight: '500',
    color: '#535a60',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#ecf4fb',
    borderRadius: 90,
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: 10,
    borderTopColor: '#ecf4fb',
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    borderRightColor: '#fff',
    margin: 0,
    padding: 0,
    marginTop: -1,
    marginLeft: 5,
  },
  buttonContainer: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#7bccd6',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
});

export default App;
