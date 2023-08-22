import { useNavigation } from '@react-navigation/native';
import React from 'react';
import MenuItem from '../components/MenuItem';

const UserMenuScreen = () => {
  const navigation = useNavigation();

  const onLogin = () => navigation.navigate('Login');
  const onRegister = () => navigation.navigate('Register');
  const onKakao = () => navigation.navigate('Kakao');
  return (
    <>
      <MenuItem name="로그인" onPress={onLogin} />
      <MenuItem name="카카오로그인" onPress={onKakao} />
      <MenuItem name="회원가입" onPress={onRegister} />
    </>
  );
};

export default UserMenuScreen;
