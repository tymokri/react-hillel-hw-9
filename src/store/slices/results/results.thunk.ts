import {createAsyncThunk} from "@reduxjs/toolkit";
import {goBattle} from "../../../service/API";
import {ISinglePlayerData, ISinglePlayerDataArray} from "./types";


export const setPlayers = createAsyncThunk(
    'results/setPlayers',
    async (players: Array<string>, {rejectWithValue}): Promise<ISinglePlayerData[]> => {
        try {
            const response = await goBattle(players);
            return response as ISinglePlayerDataArray;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);
