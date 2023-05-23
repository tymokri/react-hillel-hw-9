import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from "redux-logger";
import popularReducer from './slices/popular/popular';
import battleReducer from './slices/battle/battle';
import resultsReducer from './slices/results/results';

const logger = createLogger({
    collapsed: true
});

const store = configureStore({
    reducer: {
        popular: popularReducer,
        battle: battleReducer,
        results: resultsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;