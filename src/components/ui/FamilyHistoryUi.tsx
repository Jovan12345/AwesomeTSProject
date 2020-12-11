import React from 'react';
import {Title} from 'react-native-paper';
import {Text} from 'react-native';
const FamilyHistoryUi = () => {
  return (
    <>
      <Title>Family History</Title>
      <Text>
        Mother
        <Text> Thyroid Disease</Text>
      </Text>
      <Text>
        Father
        <Text> Depression Or Other Mental Health Diabetes</Text>
      </Text>
      <Text>
        Maternal Grandmother
        <Text> None</Text>
      </Text>
      <Text>
        Maternal Grandfather
        <Text> Colon Rectal Cancer</Text>
      </Text>
      <Text>
        Paternal Grandmother
        <Text> Derentia</Text>
      </Text>
      <Text>
        Paternal Grandfather
        <Text> None</Text>
      </Text>
      <Text>
        Sister or Brother
        <Text>Thyroid Diesase</Text>
      </Text>
    </>
  );
};
//
export default FamilyHistoryUi;
