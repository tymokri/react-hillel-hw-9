import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getRepos} from './popular.thunk';
import {IRepos, PopularState} from "./types";

const initialState: PopularState = {
    selectedLanguage: 'All',
    isLoading: false,
    repos: [],
    error: '',
    myParam: 'All'
};

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        setMyParam: (state, action: PayloadAction<string | null>) => {
            state.myParam = action.payload;
        },
        setSelectedLanguage: (state, action: PayloadAction<string>) => {
            state.selectedLanguage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRepos.pending, state => {
            state.isLoading = true;
            state.error = '';
        })
        builder.addCase(getRepos.fulfilled, (state, action: PayloadAction<IRepos[]>) => {
            state.isLoading = false;
            state.repos = action.payload;
        })
        builder.addCase(getRepos.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});

export const {
    setMyParam,
    setSelectedLanguage
} = popularSlice.actions;

export default popularSlice.reducer;