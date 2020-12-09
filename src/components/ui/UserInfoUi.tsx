import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Title, Avatar} from 'react-native-paper';

const UserInfoUi = () => {
  return (
    <View style={(style.userInfoContainer, style.borderBottom)}>
      <View style={{marginBottom: 20}}>
        <Title>John Doe</Title>
        <View style={style.userProfileInfo}>
          <View style={{flex: 1}}>
            <Avatar.Image
              size={80}
              source={require('../../assets/jhonny.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={{marginBottom: 10}}>
                <Text>Date Of Birth</Text>
                <Text>1978/08/14</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text>Age</Text>
                <Text>39 Years</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text>Gender</Text>
                <Text>Male</Text>
              </View>
              <View>
                <Text>Handedres</Text>
                <Text>Right</Text>
              </View>
            </View>
            <View>
              <View style={{marginBottom: 10}}>
                <Text>Race</Text>
                <Text>White</Text>
              </View>
              <View>
                <Text>Ethnicity</Text>
                <Text>Not Hispanic or Latino</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'column',
  },
  borderBottom: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 3,
  },
  userProfileInfo: {
    flexDirection: 'row',
  },
  medicalHistory: {
    flexDirection: 'row',
  },
});

export default UserInfoUi;
