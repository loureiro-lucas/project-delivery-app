import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './reducers/orderSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
