import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    //console.log(tokenString);
    return tokenString ? tokenString : null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken.token);
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
