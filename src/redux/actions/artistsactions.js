import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getArtists = createAsyncThunk('getArtists', async() => {
    try {
        let res = await axios.get(`${BASE_URL}/api/artists`)
        return {
            artists: res.data.data,
            success: res.data.success,
            message: res.data.message
        }
    } catch (error) {
        return {
            success: error.response.data.success,
            message: error.response.data.message
        }
    }
})

const artistsActions = {
    getArtists
}
export default artistsActions