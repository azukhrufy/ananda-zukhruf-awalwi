import { createSlice } from '@reduxjs/toolkit';


export interface SearchUserState {
    searchUserData: string
  }

const initialState: SearchUserState = {
    searchUserData: 'azukhrufy',
  }

  const searchUserReducer = createSlice({
    name: 'SearchUser',
    initialState,
    reducers: {
      onSearch: (state = initialState, action) => {
          return({
              ...state,
              searchUserData: action.payload != '' ? action.payload : 'azukhrufy'
          })},
      handleClear: (state) => ({
          ...state,
          searchUserData: 'azukhrufy',
      })
    },
  });
  
  export const { onSearch, handleClear } = searchUserReducer.actions;
  export default searchUserReducer.reducer;
  