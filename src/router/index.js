import React from 'react'
import AuthStack from './AuthStack/authStack';
import AppStack from './AppStack/appStack';
import { useAuthentication } from '../utilis/hooks/useAuthentication';
import {getCurrentUser} from '../Modules/auth/firebase/firebase';
const Providers = () => {
  const { user } = useAuthentication();
  console.log('user:', user);
  const currentUser = getCurrentUser();
  console.log('currentUser:', currentUser);
  
  return user && user.emailVerified || currentUser !== null && currentUser.emailVerified  ? <AppStack/> : <AuthStack/>
}

export default Providers

