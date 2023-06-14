import { WhereToVote, LocationOnOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import unitedStates from 'statesFolder';

import { Box, Typography, Divider, useTheme} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from 'components/WidgetWrapper';
import UserImage from 'components/UserImageWidget';
import { useNavigate } from "react-router-dom";




const UserWidget = () => {

  const user = useSelector(state => state.user);
  const {palette} = useTheme();
  const navigate = useNavigate();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const homeState = unitedStates.find(s => s._id === user.stateId);
  
  const {firstName, lastName, congressDist, pollingPlace, picturePath, _id} = user;
  const fullName = `${firstName} ${lastName}`;

  if(!user){
    return null;
  }

  return (
    <WidgetWrapper>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/updateProfile/${_id}`)}      
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath}/>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer"
                }
              }}
            >
              {fullName}
            </Typography>
            <Typography variant='h6' >STATE: {homeState.name}</Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>
      
        <Divider/>

        {/* second row */}
        <Box p="1rem 0">
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5">
            <LocationOnOutlined fontSize="large" sx={{color: main}}/>
            <Typography variant='subtitle2' color='medium'>Congressional District: {congressDist}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
            <WhereToVote fontSize="large" sx={{color: main}}/>
            <Typography variant='subtitle2' color='medium'>Polling Place: {pollingPlace}</Typography>
          </Box>
        </Box>      

    </WidgetWrapper>
  )
}
export default UserWidget;