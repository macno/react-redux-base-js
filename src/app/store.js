import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import loaderReducer from '../features/modalLoader/modalLoaderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
  },
});
