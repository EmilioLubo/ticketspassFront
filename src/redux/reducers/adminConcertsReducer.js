import { createReducer } from "@reduxjs/toolkit";
import adminConcertsActions from "../actions/adminConcertsActions";
const { getInitialData } = adminConcertsActions;

const initialState = {
  concerts: [],
  message: "",
  loading: false,
};

const adminConcertsReducer = createReducer(initialState, builder => {
  builder
    .addCase(getInitialData.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, concerts: action.payload.response, loading: false };
      } else {
        return { ...state, concerts: [], loading: false, message: action.payload.message };
      }
    })
});

export default adminConcertsReducer;
