import { createReducer } from "@reduxjs/toolkit";
import artistsActions from "../actions/artistsactions";

const {getArtists} = artistsActions
const initialState = {
    artists: [],
    loading: false
}

const artistsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getArtists.pending, (state, action) => {
            return {...state, loading: true}
        })
        .addCase(getArtists.fulfilled, (state, action) => {
            return {...action.payload, loading: false}
        })
        .addCase(getArtists.rejected, (state, action) => {
            return { ...state, loading: false}
        })
})

export default artistsReducer