import { createSlice } from "@reduxjs/toolkit";

export const setCurrentModelSlice = createSlice({
  name: "currentModel",
  initialState: {
    currentModel: 'xwing',
  },
  reducers: {
    setCurrentModel: (state, action) => {
      state.currentModel = action.payload;
    }
  }
});

export const { setCurrentModel } = setCurrentModelSlice.actions;

export default setCurrentModelSlice.reducer;