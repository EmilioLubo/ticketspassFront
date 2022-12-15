import { createReducer } from "@reduxjs/toolkit";
import artistsActions from "../actions/artistsActions";

const {getArtists, getFilteredArtists} = artistsActions
const initialState = {
    artists: [],
    loading: false,
    message: ''
}

const artistsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getArtists.pending, (state, action) => {
            return {...state, loading: true}
        })
        .addCase(getArtists.fulfilled, (state, action) => {
            return {...state, ...action.payload, loading: false}
        })
        .addCase(getArtists.rejected, (state, action) => {
            return { ...state, loading: false, message: action.payload.message}
        })
        .addCase(getFilteredArtists.pending, (state, action) => {
            return {...state, loading: false}
        })
        .addCase(getFilteredArtists.fulfilled, (state, action) => {
            return {...state, ...action.payload, loading: false}
        })
        .addCase(getFilteredArtists.rejected, (state, action) => {
            return { ...state ,loading: false, message: action.payload.message}
        })
})

export default artistsReducer