import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
    results: ['KOALA', 'MAPACHE'],
    newSearch: [],
    character: {}
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    search: (state, action) => {
      state.newSearch = state.results.filter(item => item === action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, search } = counterSlice.actions;

export default counterSlice.reducer;