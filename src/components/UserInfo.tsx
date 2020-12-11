import React from 'react';
import {View} from 'react-native';
import UserInfoUi from './ui/UserInfoUi';
import MedicalHistoryUi from './ui/MedicalHistoryUi';
import FamilyHistoryUi from './ui/FamilyHistoryUi';

const UserInfo = () => {
  return (
    <View>
      <UserInfoUi />
      <MedicalHistoryUi />
      <FamilyHistoryUi />
    </View>
  );
};

export default UserInfo;
