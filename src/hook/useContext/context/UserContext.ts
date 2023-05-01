import { createContext } from 'react';
import { UserData, data } from '../types/userData';

interface UserContextProps {
  userData: UserData;
  toggleUser: (value: string) => void;
}

const UserContext = createContext<UserContextProps>({
  userData: data,
  toggleUser: () => {
    return null;
  },
});

export default UserContext;
