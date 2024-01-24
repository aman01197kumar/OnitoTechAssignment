import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CombinedData {
  name: string;
  age: number;
  mobileNumber: number;
  sex: string;
  idType: string;
  idValue: number | undefined;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number | undefined;
}

interface UsersState {
  combinedDataArray: CombinedData[];
}

const initialState: UsersState = {
  combinedDataArray: [],
};

// Create a slice with the initial state
const myArraySlice = createSlice({
  name: "myArray",
  initialState,
  reducers: {
    addCombinedData: (state, action: PayloadAction<CombinedData>) => {
      if (state.combinedDataArray === undefined) {
        state.combinedDataArray = []; // Initialize as an empty array if undefined
      }
      state.combinedDataArray.push(action.payload);
    },
  },
});

// Export the action
export const { addCombinedData } = myArraySlice.actions;

// Export the reducer
export default myArraySlice.reducer;
