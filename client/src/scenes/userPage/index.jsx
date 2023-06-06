import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import unitedStates from "statesFolder";


const UserPage = () => {

  const user = useSelector(state => state.user);
  const {firstName, lastName, piturePath, stateId, congressDist, pollingPlace} = user;

  return (
    <div>UserPage  {firstName} {pollingPlace}</div>
  )
}
export default UserPage;