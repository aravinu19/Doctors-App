import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigator';

// export default class App extends React.Component {
//   render() {
//     return (
//       <DoctorProfile />
//       // <View style={styles.container}>
//       //   <Text>One Hell of a Mess : )</Text>
//       // </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class App extends React.Component {
  render(){
      return (
        <AppNavigator />
      )
    }
};