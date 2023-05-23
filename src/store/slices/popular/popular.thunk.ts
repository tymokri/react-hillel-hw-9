import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchPopularRepos} from "../../../service/API";
import {IRepos, IReposArray} from "./types";

export const getRepos = createAsyncThunk(
    'popular/getRepos',
    async (selectedLanguage: string, {rejectWithValue}): Promise<IRepos[]> => {
        try {
            const response = await fetchPopularRepos(selectedLanguage);
            return response as IReposArray;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);