import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UserInfo from './UserInfo';

const MyComponent = () => {
  return (
    <View style={style.containerr}>
      <View style={style.container}>
        <UserInfo />
      </View>
      <Text style={style.container}>Hello1</Text>
      <Text style={style.container}>Hello2</Text>
    </View>
  );
};

const style = StyleSheet.create({
  containerr: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
});

export default MyComponent;
