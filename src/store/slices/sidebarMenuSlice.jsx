import { createSlice } from '@reduxjs/toolkit'

export const sideBarMenuSlice = createSlice({
  name: 'sideBarMenu',
  initialState: {
    value: true,
  },
  reducers: {
    toggleSideBarMenu: (state) => {
      state.value = !state.value
    },
    // toggleMobileMenu: (state) => {
    //   state.value = !state.value
    // },
  },
})

export const { toggleSideBarMenu } = sideBarMenuSlice.actions

export default sideBarMenuSlice.reducer