import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BattleState, TPlayerPayload} from "./types";

const initialState: BattleState = {
    playerOneName: '',
    playerOneImage: null,
    playerTwoName: '',
    playerTwoImage: null,
};

export const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setPlayerData: (state, action: PayloadAction<TPlayerPayload>) => {
            state[`${action.payload.id}Name`] = action.payload.value
            state[`${action.payload.id}Image`] = `https://github.com/${action.payload.value}.png?size=200`
        },
        resetPlayerData: (state, action: PayloadAction<string>) => {
            state[`${action.payload}Name`] = ''
            state[`${action.payload}Image`] = null
        }
    }
});

export const {
    setPlayerData,
    resetPlayerData
} = battleSlice.actions;

export default battleSlice.reducer;