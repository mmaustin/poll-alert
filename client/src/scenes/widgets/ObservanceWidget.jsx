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
  console.log(userPollingPlace, pollingPlace);
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
      <Box>
        <FlexBetween>
          <IconButton><Person/></IconButton>
          <Typography>{name}</Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography>STATE</Typography>
          <Typography>{stateName}</Typography>
        </FlexBetween>
        <Divider sx={{margin: "1.25rem 0"}}/>
      </Box>
      {/* <Typography>
        ALLEDGED MALFEASANCE:
      </Typography> */}
      <Typography variant="h5" fontWeight='500'>
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
            { pollingPlace === userPollingPlace && (
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
            )}   
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