import unitedStates from "statesFolder";
import { Typography, Box, useTheme , Divider} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const StateWidget = ({stateId}) => {

  const {palette} = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const state = unitedStates.find(usState => usState._id === stateId);
  const {name, populationApprox, governor, flagPicturePath, senators, totalReps } = state;
  const senatorNames = senators.join(' & ');

  return (
    <WidgetWrapper>
      <FlexBetween >
        <Typography color={dark} variant='h5' fontWeight='500'>
          {name}
        </Typography>
        <Typography color={dark} variant='h5' fontWeight='500'>{governor}</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='200px'
        alt='state flag'
        src={`http://localhost:5001/assets/${flagPicturePath}`}
        style={{borderRadius: '0.75', margin: '0.75rem 0'}}
      />
      <Box display='flex' justifyContent='space-between' alignItems='center' >
        <Typography variant='h5' fontWeight='500' color={main}>Population:</Typography>
        <Typography variant='h5' fontWeight='500' color={main}>{populationApprox}</Typography>
      </Box>
      <Divider/>
      <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='flex-start' >
        <Typography variant='h5' fontWeight='500' color={main}>Senators:</Typography>
        <Typography variant='h5' fontWeight='500' color={main}>{senatorNames}</Typography>
      </Box>
      <Divider/>
      <Box display='flex' justifyContent='space-between' alignItems='center' >
        <Typography variant='h5' fontWeight='500' color={main}>Total Representatives:</Typography>
        <Typography variant='h5' fontWeight='500' color={main}>{totalReps}</Typography>
      </Box>
    </WidgetWrapper>
  )
}
export default StateWidget