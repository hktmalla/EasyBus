import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>
              Easy Bus 
          </Text>
        </View>
        <View>
          <Text>
                Login
          </Text>
        </View>
        <View>
          <Text>Departure Time</Text>
        </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDIrection : 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
