import { useNavigation } from '@react-navigation/native';
import React from 'react';
import MenuItem from '../components/MenuItem';
import { getProfile, login } from '@react-native-seoul/kakao-login';

const UserMenuScreen = () => {
  const navigation = useNavigation();

  const onLogin = () => navigation.navigate('Login');
  const onRegister = () => navigation.navigate('Register');

  const signInWithKakao = async () => {
    const token = await login();

    console.log(JSON.stringify(token));
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
  };

  const getKakaoProfile = async () => {
    const profile = await getProfile();

    console.log(profile);
  };

  const unlinkKakao = async () => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <>
      <MenuItem name="로그인" onPress={onLogin} />
      <MenuItem name="카카오로그인" onPress={signInWithKakao} />
      <MenuItem name="회원가입" onPress={onRegister} />
      <MenuItem name="profile" onPress={getKakaoProfile} />
    </>
  );
};

export default UserMenuScreen;
