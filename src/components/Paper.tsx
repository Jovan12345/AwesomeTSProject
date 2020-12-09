import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UserInfo from './UserInfo';
import PhysicalActivity from './PhysicalActivity';

const MyComponent = () => {
  return (
    <View style={style.containerr}>
      <View style={{marginRight: 60}}>
        <UserInfo />
      </View>
      <View style={{marginRight: 60}}>
        <PhysicalActivity />
      </View>
      <Text>
        jasdkljjkdsajkdsajkdaslkdjsakjldsdkjdkjskjdsakjdsalkdjsaldsakjldsakjdsakjl
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  containerr: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    width: '33%',
  },
});

export default MyComponent;
