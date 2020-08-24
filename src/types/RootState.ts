// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { AuthState } from 'app/containers/Auth/types';
import { ThemeState } from 'theme/types';
import { NaversState } from 'app/containers/Navers/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  theme?: ThemeState;
  auth?: AuthState;
  navers?: NaversState;
  modal?: any;
  router?: any;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
