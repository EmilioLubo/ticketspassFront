import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getInitialData = createAsyncThunk("getInitialData", async data => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL || BASE_URL}/api/concerts`);
    return {
      success: res.data.success,
      response: res.data.response,
      message: res.data.message,
    };
  } catch (error) {
    let message = error.response ? error.response.data.message || error.response.data : error.message;
    return { success: false, message };
  }
});

const adminConcertsActions = {
  getInitialData,
};

export default adminConcertsActions;
