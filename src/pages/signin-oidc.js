import React, { useEffect } from "react";
import { signinRedirectCallback } from "../services/userService";
import { useHistory } from "react-router-dom";

function SigninOidc() {
  const history = useHistory();
  useEffect(() => {
    function signinAsync() {
      signinRedirectCallback().then(function (user) {
        console.log(user);
        window.history.replaceState(
          {},
          window.document.title,
          window.location.origin + window.location.pathname
        );
        history.push("/");
      });
    }
    signinAsync();
  }, [history]);

  return <div>Redirecting...</div>;
}

export default SigninOidc;
