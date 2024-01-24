import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface UserDetails
{
    name: String,
      age: number,
      mobileNumber: number,
      sex: String,
      idType: String,
      idValue: number|undefined,
  
  }

  interface AddressDetails{
    address:String,
    city:String,
    state:String,
    country:String,
    pincode:number|undefined

  }
  
  interface UsersState {
    personalDetails: UserDetails[];
    userAddressDetails:AddressDetails[]
  }
  
  const initialState: UsersState = {
    personalDetails: [],
    userAddressDetails:[]
  };
  // Create a slice with the initial state
  const myObjectSlice = createSlice({
    name: 'myObject',
    initialState,
    reducers: {
      addObject: (state, action: PayloadAction<UserDetails>) => {
        state.personalDetails.push(action.payload);
      },
      addAddressDetails: (state, action: PayloadAction<AddressDetails>) => {
        state.userAddressDetails.push(action.payload);
      },
    },
  });
  
  // Export the action
  export const { addObject,addAddressDetails } = myObjectSlice.actions;
  
  // Export the reducer
  export default myObjectSlice.reducer;