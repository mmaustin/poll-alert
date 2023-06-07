import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setObservance } from "state";


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
  const token = useSelector(state => state.token);
  const isLiked = Boolean(alsoObserved[loggedInUserId]);
  const observedCount = Object.keys(alsoObserved).length;
  const {palette} = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  
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

  return (
    <WidgetWrapper m="2rem 0">
      <div>
        <Typography>{name}</Typography>
        <Typography>{pollingPlace}</Typography>
      </div>
      <Typography>
        {description}
      </Typography>
        {picturePath && (
          <img
            width='100%'
            height='auto'
            alt='post'
            style={{borderRadius: '0.75rem', marginTop: '0.75ren'}}
            src={`http://localhost:5001/assets/${picturePath}`}
          />
        )}
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

          <IconButton>
                <ShareOutlined/>
          </IconButton>
        </FlexBetween>
    </WidgetWrapper>
  )
}
export default ObservanceWidget;