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
          aria-label="observation-description"
          placeholder="(Max: 200 Characters)"
          value={observance}
          name="observance"
          onChange={(e)=> setObservance(e.target.value)}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem"
          }}
        />
      </FlexBetween>      
      <Divider sx={{margin: "1.25rem 0"}}/> 
        { observance.length <= 200 ? (
          <Button
            disabled={!observance}
            onClick={handleObservance}
            sx={{
              color: palette.background.alt,
              backgroundColor: palette.primary.main,
              borderRadius: "3rem"
            }}
          >
            Submit
          </Button>
        ) : 
            <FlexBetween>
              <Typography fontWeight='500' variant='h5' sx={{color: 'red'}} >Please Shorten Your Description!</Typography>
            </FlexBetween>
        }      
    </WidgetWrapper>
  )
}
export default MyObservancesWidget;