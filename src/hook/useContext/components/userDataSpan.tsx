import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserDataSpan = () => {
  const { userData, toggleUser } = useContext(UserContext);
  return (
    <div>
      <span>{userData.nickName}</span>
    </div>
  );
};

export default UserDataSpan;
