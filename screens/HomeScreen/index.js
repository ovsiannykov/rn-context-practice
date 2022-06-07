import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import counterContext from '../../context/counterContext';

const HomeScreen = ({increment, decrement}) => {
  const counterValue = useContext(counterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.counterValue}>{counterValue.counter ?? 'NaN'}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonTitle}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
