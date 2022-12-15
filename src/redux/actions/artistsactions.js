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
        let err
        error.response ?
        err = error.response.data.message :
        err = error.message
        return {
            success: false,
            message: err
        }
    }
})

const getFilteredArtists = createAsyncThunk('getFilteredArtists', async(filter) => {
    try {
        let searchQuery = filter.name
        let checkQuery = filter.genre.join("&genre=")
        let res = await axios.get(`${BASE_URL}/api/artists?name=${searchQuery}&genre=${checkQuery}`)
        return {
            artists: res.data.data,
            success: res.data.success,
            message: res.data.message
        }
    } catch (error) {
        console.log(error)
        let err
        error.response ?
        err = error.response.data.message :
        err = error.message
        return {
            success: false,
            message: err
        }
    }
})

const artistsActions = {
    getArtists,
    getFilteredArtists
}
export default artistsActions