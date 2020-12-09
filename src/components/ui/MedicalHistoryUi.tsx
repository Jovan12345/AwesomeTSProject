import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

const MedicalHistoryUi = () => {
  return (
    <View style={style.borderBottom}>
      <Title>Medical History</Title>
      <View style={style.medicalHistory}>
        <View style={{flex: 1}}>
          <View style={{marginBottom: 10}}>
            <Text>Present Medical History</Text>
            <Text>Elevated A 1 C</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text>Past Medical History</Text>
            <Text>Childhood Asthma</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text>Past Surgery or Hospitalization</Text>
            <Text>Tonselectomy</Text>
            <Text>Wisdom Teeth Removal</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text>Medications</Text>
            <Text>None</Text>
          </View>
          <View>
            <Text>Alergies</Text>
            <Text>None</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{marginBottom: 10}}>
            <Text>Year of Onset</Text>
            <Text>2017</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text>Year of Resolution</Text>
            <Text>1992</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text>Year of Surgery</Text>
            <Text>1995</Text>
            <Text>1996</Text>
          </View>
          <View style={{marginBottom: 25}}>
            <Text>Frequency</Text>
          </View>
          <View>
            <Text>Reaction</Text>
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

export default MedicalHistoryUi;
