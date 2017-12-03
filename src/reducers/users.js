import { createReducer } from 'redux-act';


import {
    getUsers,
    getUsersThunk,
    getUsersSuccess,
    getUsersFailure,
    cancelFetchUsers
} from '../actions/users';

const initialState = {
    data: [],
    isFetching: false,
    isCanceled: true,
    error: false,
};

export default createReducer({
    [getUsersThunk]: state => ({ ...state, isFetching: true, isCanceled: false }),
    [getUsers]: state => ({ ...state, isFetching: true, isCanceled: false }),
    [getUsersSuccess]: (state, payload) => {
        if (state.isCanceled) {
            return state;
        }

        return {
            ...state,
            isFetching: false,
            isCanceled: false,
            data: payload
        };
    },
    [getUsersFailure]: (state, payload) => ({
        ...state,
        isFetching: false,
        isCanceled: false,
        error: payload
    }),
    [cancelFetchUsers]: state => ({
        ...state,
        data: [],
        isFetching: false,
        isCanceled: true,
    }),
}, initialState);