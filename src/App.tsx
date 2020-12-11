//import 'react-native-gesture-handler';
import React from 'react';

import { View, Text } from 'react-native';
// import TestRechart from './components/TestRechart';
// import TestVictory from './components/TestVictoryNative';
// import TestVictoryNativeWeb from './components/TestVictoryNativeWeb';
import Paper from './components/Paper';


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

export default App;
