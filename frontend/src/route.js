import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Login = React.lazy(() => import('./containers/Auth/Login'));
const ResetEmail = React.lazy(() => import('./containers/Auth/ResetEmail'));
const ResetEmailConfirmation = React.lazy(() => import('./containers/Auth/Confirm'));
const ResetToken = React.lazy(() => import('./containers/Auth/ResetToken'));

//Home
const Home =  React.lazy(() => import('./containers/MainLanding/Home'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/reset-email', exact: true, name: 'ResetEmail', component: ResetEmail },
    { path: '/reset-email-confirmation', exact: true, name: 'Confirm', component: ResetEmailConfirmation },
    { path: '/new-password/token/:token', exact: true, name: 'ResetToken', component: ResetToken },
    //home
    { path: '/home', exact: true, name: 'Home', component: Home },
];

export default route;