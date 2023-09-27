import React from "react";
import { useUser } from "../hooks/useUser";
import Login from "../screens/Login";
import Home from "../screens/Home";

export default function Routes() {
  const { user } = useUser();

  return (
    
        user === null ? <Login/> : <Home/>
    
  )
}
