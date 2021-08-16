import { configureStore } from '@reduxjs/toolkit';
// import { persistStore} from 'redux-persist';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});


// export const persistor = persistStore(store);
