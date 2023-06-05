import {Box, Divider, Typography, InputBase, useTheme, Button, IconButton, useMediaQuery} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImageWidget";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getObservances } from "state";


const MyObservancesWidget = () => {

  const {_id, picturePath} = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const [observance, setObservance] = useState('');
  const dispatch = useDispatch();
  const {palette} = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const createObservance = async() => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", observance);

    const response = await fetch(`http://localhost:5001/observances`, {
      method: "POST",
      headers: {Authorization: `Bearer ${token}`},
      body: formData,
    });
    const observances = await response.json();
    dispatch(getObservances({observances}));
    setObservance("")    
  }

  return (
    <div>MyObservancesWidget</div>
  )
}
export default MyObservancesWidget;