/* eslint-disable no-unused-vars */
//import 'react-native-gesture-handler';
import React from 'react';

import { View, Text } from 'react-native';
// import TestRechart from './components/TestRechart';
// import TestVictory from './components/TestVictoryNative';
// import TestVictoryNativeWeb from './components/TestVictoryNativeWeb';
import Paper from './components/Paper';


//Aplify Auth
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// Prebuilt UI component
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

const App = () => {
  return (
    <View style={{ marginTop: '2%', marginLeft: '3%' }}>
      <Text style={{ fontSize: 25, fontWeight: "600", color: 'darkblue', marginBottom: 40, alignSelf: "center" }}>Chart components</Text>
      <View>
        {/* <TestRechart /> */}
        {/* <TestVictory /> */}
        {/* {Platform.OS === 'web' ? <TestVictoryNativeWeb />
         : <TestVictory />} */}
        <Paper />
      </View>
    </View>
  );
};

export default withAuthenticator(App);
