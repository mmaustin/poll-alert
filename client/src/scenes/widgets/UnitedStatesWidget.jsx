import { Typography, Box, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const UnitedStatesWidget = () => {

  const {palette} = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;

  return (
    <WidgetWrapper>
      <FlexBetween >
        <Typography color={dark} variant='h5' fontWeight='500'>
          Joseph R. Biden
        </Typography>
        <Typography color={dark} variant='h5' fontWeight='500'>Kamala D. Harris</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='national flag'
        src='http://localhost:5001/assets/us-flag.jpeg'
        style={{borderRadius: '0.75', margin: '0.75rem 0'}}
      />
      <Box display='flex' justifyContent='center' alignItems='center' >
        <Typography variant='h5' fontWeight='500' color={main}>E Pluribus Unum</Typography>
      </Box>
    </WidgetWrapper>
  )
}
export default UnitedStatesWidget;