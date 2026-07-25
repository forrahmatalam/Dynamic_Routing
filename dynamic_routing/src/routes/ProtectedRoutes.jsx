import React from 'react'
import { Navigate } from 'react-router'


const ProtectedRoutes = ({children}) => {

let isAdmin =false;

if(!isAdmin){
   alert("You are not an admin")
   return <Navigate to={"/"}/>
}
  return children
}

export default ProtectedRoutes
