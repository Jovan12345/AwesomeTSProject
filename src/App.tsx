import React from 'react';
import {View, Text} from 'react-native';
import TestChart from './components/TestChart';

const App = () => {
  return (
    <View style={{marginTop: '2%', marginLeft: '3%'}}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Chart components:</Text>
      <View>
        <TestChart />
      </View>
    </View>
  );
};

export default App;
