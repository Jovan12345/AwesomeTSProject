import React from 'react';
import {View} from 'react-native';
import {Title, Caption} from 'react-native-paper';
import PieChart from './ui/PieChart';
const PhysicalActivity = () => {
  return (
    <View>
      <Title>
        Physical Activity
        <Caption> International Physical Activity Questionraire (IPAQ)</Caption>
      </Title>
      <Title>High</Title>
      <Caption>Weekly Physical Activity Level</Caption>
      <PieChart />
    </View>
  );
};

export default PhysicalActivity;
