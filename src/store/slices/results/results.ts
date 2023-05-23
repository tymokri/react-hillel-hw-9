import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setPlayers} from "./results.thunk";
import {ResultsState, ISinglePlayerData} from "./types";

const initialState: ResultsState = {
    isLoading: false,
    players: [],
    error: null,
    standoff: false
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setPlayers.pending, state => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(setPlayers.fulfilled, (state, action: PayloadAction<ISinglePlayerData[]>) => {
            state.isLoading = false
            state.players = action.payload
            state.standoff = action.payload.every(item => item.score === 0)
        })
        builder.addCase(setPlayers.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export default resultsSlice.reducer;