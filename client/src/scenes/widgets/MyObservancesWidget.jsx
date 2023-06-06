import {Box, Divider, Typography, InputBase, useTheme, Button, IconButton, useMediaQuery} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImageWidget";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getObservances } from "state";


const MyObservancesWidget = ({userId, picturePath}) => {

  //const {user} = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const [observance, setObservance] = useState('');
  const dispatch = useDispatch();
  const {palette} = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handleObservance = async() => {
    // const formData = new FormData();
    // formData.append("userId", userId);
    // formData.append("description", observance);

    const response = await fetch(`http://localhost:5001/observances`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        description: observance,
      }),
    });
    const observances = await response.json();
    console.log(observances);
    if(!observances.message){
      dispatch(getObservances({observances}));
    }
    setObservance("")    
  }

  return (
    <WidgetWrapper>
      <FlexBetween gap='1.5rem'>
        <UserImage image={picturePath} />
        <InputBase
          placeholder="Please Describe What You See"
          value={observance}
          onChange={(e)=> setObservance(e.target.value)}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem"
          }}
        />

      <Divider sx={{margin: "1.25rem 0"}}/> 

        <Button
          disabled={!observance}
          onClick={handleObservance}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem"
          }}
        >
          Observed
        </Button>        
      </FlexBetween>      
    </WidgetWrapper>
  )
}
export default MyObservancesWidget;