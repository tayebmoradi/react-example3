import { configureStore } from '@reduxjs/toolkit'
import sideBarMenuReducer from './slices/sidebarMenuSlice'

export const store = configureStore({
  reducer: {
    sideBarMenu: sideBarMenuReducer,
  },
})