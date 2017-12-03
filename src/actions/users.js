import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { createAction } from 'redux-act';

import apiGetUsers from '../utils/api';

export const getUsers = createAction('Api Start Get Users with RxJS');
export const getUsersThunk = createAction('Api Get Users with Thunk');
export const getUsersSuccess = createAction('Api Get Users Success');
export const getUsersFailure = createAction('Api Get Users Failure');
export const cancelFetchUsers = createAction('Cancel API and remove uses from reducer');

export const fetchUsersThunk = id => dispatch => {
    dispatch(getUsersThunk());
    apiGetUsers(id)
        .then(response => dispatch(getUsersSuccess(response)))
        .catch(error => dispatch(getUsersFailure(error)));
}

export const fetchUsersRx = action$ =>
    action$.ofType(getUsers).mergeMap(action =>
        Observable.fromPromise(apiGetUsers(action.payload))
            .map(response => getUsersSuccess(response))
            .catch(error => getUsersFailure(error))
            .takeUntil(action$.ofType(cancelFetchUsers))
    );
