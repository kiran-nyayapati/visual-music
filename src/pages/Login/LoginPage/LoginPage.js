import React from 'react';
import classes from './Login.module.scss';
import { Link } from 'react-router-dom';

function LoginPage({ setEmail, setPassword, onFormSubmit, errorMsg }) {
    return (
        <div className={classes.overlay}>
            <div className={classes.loginOverlay}>
                <form className={classes.loginForm} onSubmit={onFormSubmit}>
                    <div className={classes.titleGroup}>
                        <span>Welcome back!</span>
                    </div>
                    {
                        errorMsg?
                        <div className={classes.errorLabel}>
                            {errorMsg}
                        </div>
                        :
                        null
                    }
                    <div className={classes.emailGroup}>
                        <label className={classes.emailLabel}>
                            Email address
                        </label>
                        <input
                            className={classes.emailField}
                            type="email"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className={classes.passwordGroup}>
                        <label className={classes.passwordLabel}>
                            Password
                        </label>
                        <input
                            className={classes.passwordField}
                            type="password"
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className={classes.loginButtonGroup}>
                        <button className={classes.loginButton} type="submite">
                            Login
                        </button>
                    </div>
                    <div className={classes.forgotPasswordLinksGroup}>
                        <Link
                            to="/forgot-password"
                            className={classes.forgotPasswordLink}
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
