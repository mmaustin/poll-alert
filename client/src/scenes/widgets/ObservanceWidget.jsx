import { Person, FavoriteBorderOutlined, FavoriteOutlined, Delete } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImageWidget";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setObservance, getObservances } from "state";
import unitedStates from "statesFolder";



const ObservanceWidget = ({
  observanceId,
  userId,
  name,
  description,
  pollingPlace,
  alsoObserved,
  stateId,
  picturePath,
}) => {

  const dispatch = useDispatch();
  const loggedInUserId = useSelector(state => state.user._id);
  const userPollingPlace = useSelector(state => state.user.pollingPlace);
  const token = useSelector(state => state.token);
  const isLiked = Boolean(alsoObserved[loggedInUserId]);
  const observedCount = Object.keys(alsoObserved).length;
  const {palette} = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const observanceState = unitedStates.find(s => s._id === stateId);
  const {name: stateName} = observanceState;
  
  const patchObservance = async () => {
    const response = await fetch(`http://localhost:5001/observances/${observanceId}/observed`,{
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: loggedInUserId})
    });
    const updatedObservance = await response.json();
    dispatch(setObservance({observance: updatedObservance}));
  };

  const deleteObservance = async() => {
    const response = await fetch(`http://localhost:5001/observances/${observanceId}`,{
      method: 'DELETE',
      headers: {Authorization: `Bearer ${token}`}
    });
    const data = await response.json();
    dispatch(getObservances({observances: data}))    
  };

  return (
    <WidgetWrapper m="2rem 0">
      <UserImage image={picturePath}/>
      <Box p='0 5px' >
        <FlexBetween>
          <IconButton sx={{ color: palette.primary.dark}} variant="h6" fontWeight='500'><Person/></IconButton>
          <Typography sx={{ color: palette.primary.dark}} variant="h6" fontWeight='500'>{name}</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography sx={{ color: palette.primary.dark}} variant="h6" fontWeight='500'>STATE</Typography>
          <Typography sx={{ color: palette.primary.dark}} variant="h6" fontWeight='500'>{stateName}</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography sx={{ color: palette.primary.dark}} variant="h6" fontWeight='500'>POLLING PLACE</Typography>
          <Typography sx={{ color: palette.primary.dark}} variant="h6" fontWeight='500'>{pollingPlace}</Typography>
        </FlexBetween>
        <Divider sx={{margin: "1.25rem 0"}}/>
      </Box>
      {/* <Typography>
        ALLEDGED MALFEASANCE:
      </Typography> */}
      <Typography p='5px' sx={{ color: palette.primary.dark}} variant="h5" fontWeight='500'>
        {description}
      </Typography>
        {/* {picturePath && (
          <img
            width='100%'
            height='auto'
            alt='post'
            style={{borderRadius: '0.75rem', marginTop: '0.75ren'}}
            src={`http://localhost:5001/assets/${picturePath}`}
          />
        )} */}
        <FlexBetween mt='0.25rem'>
          <FlexBetween gap='1rem'>
            <FlexBetween gap='0.3rem'>
              <IconButton onClick={patchObservance}>
                {isLiked ? ( 
                  <FavoriteOutlined sx={{color: primary}}/>
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>
              <Typography>{observedCount}</Typography>
            </FlexBetween>   
          </FlexBetween>

          {loggedInUserId === userId && (
            <IconButton onClick={deleteObservance}>
                  <Delete/>
            </IconButton>
          )}
        </FlexBetween>
    </WidgetWrapper>
  )
}
export default ObservanceWidget;