import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { withRouter, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';

function Login() {
    // useSelector Redux hook re-mount every time the `state` in redux-store modified,
    // at first visit in the page, `uid` and `authError` are both equal null.
    // after submiting a login request, one of them should not be null anymore...
    const uid = useSelector(state => state.firebase.auth.uid);
    const error = useSelector(state => state.authError);

    // useSispatch its the second redux hook, allow actions dispatching from react component.
    // we will dispatch { logIn } action imported from the store.

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }));
    };

    // in case { uid } is not null anymore we want the user redirect to app
    if (uid) return <Redirect to="/app" />;

    if (error) {
        // ToDo - give some UX when getting error and when loading
        console.log(error);
    }

    return (
        <LoginPage
            setEmail={setEmail}
            setPassword={setPassword}
            onFormSubmit={onFormSubmit}
            errorMsg={error?'Email or password incorect':null}
        />
    );
}

export default withRouter(Login);
