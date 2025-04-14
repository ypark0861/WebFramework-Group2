// https://www.npmjs.com/package/@react-oauth/google
// https://browsee.io/blog/authentication-with-react-router-v6-step-by-step-guide/

import React from 'react';
import { useCallback } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/userSlice'

function Login() {
  const dispatch = useDispatch();
  const theuser = useSelector((state) => state.users.user)
  const navigate = useNavigate();

  function userRouting() {
    navigate("/myfood");
  }
  
  return (
      <div className="flex flex-col items-center">
        <div div className="container flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg h-54 w-72 items-center gap-4">
        <h1 className="text-slate-950"></h1>
        <h1 className="text-slate-950 text-lg m-8">Start Your Healty Choices!</h1>
        <div className="m-8">
        <GoogleLogin 
        onSuccess={(credentialResponse) => {
          // console.log(credentialResponse)
          const user_email = jwtDecode(credentialResponse.credential);
          if (user_email) {
            const user_login=dispatch(login(user_email.email));
            console.log(user_login);
            console.log(theuser);

            userRouting();
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        auto_select={true}
        useOneTap
        />
        </div>
        </div>
      </div>
  )
}

export default Login