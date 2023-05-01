import { useState } from 'react';
import { UserData, data } from '../types/userData';

const useUserDataChange = () => {
  const [userData, setUserData] = useState<UserData>(data);
  const toggleUser = (value: string) => {
    setUserData((prevState) => {
      return { ...prevState, nickName: value };
    });
  };
  return { userData, toggleUser };
};

export default useUserDataChange;
