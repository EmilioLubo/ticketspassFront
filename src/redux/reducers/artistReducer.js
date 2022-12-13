import { createReducer } from "@reduxjs/toolkit";
import artistsActions from "../actions/artistsactions";

const {getArtists} = artistsActions
const initialState = {
    artists: []
}

const artistsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getArtists.pending, (state, action) => {

        })
        .addCase(getArtists.fulfilled, (state, action) => {
            return {...action.payload}
        })
        .addCase(getArtists.rejected, (state, action) => {

        })
})

export default artistsReducer