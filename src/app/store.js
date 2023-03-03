import { configureStore } from '@reduxjs/toolkit'
import refresher from '../feature/controller/refresher';
export const store = configureStore({
  reducer: {
    refresh: refresher,
  },
})