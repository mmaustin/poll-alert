import { WhereToVoteIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import unitedStates from 'statesFolder';

import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from 'components/WidgetWrapper';
import UserImage from 'components/UserImageWidget';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const UserWidget = () => {

  const user = useSelector(state => state.user);
  const {palette} = useTheme();
  const navigate = useNavigate();
  const token = useSelector(state => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  const homeState = unitedStates.find(s => s._id === user.stateId);
  
  const {firstName, lastName, congressDist, pollingPlace} = user;
  const fullName = `${firstName} ${lastName}`;

  if(!user){
    return null;
  }

  return (
    <>
      <div>UserWidget</div>
      {homeState.name}
    </>
  )
}
export default UserWidget;