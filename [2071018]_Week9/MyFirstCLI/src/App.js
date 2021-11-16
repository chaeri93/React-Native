import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChaeriKim 김채리 2071018</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;
