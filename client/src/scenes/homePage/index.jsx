import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import ContactWidget from "scenes/widgets/ContactWidget";
import MyObservancesWidget from "scenes/widgets/MyObservancesWidget";
import ObservancesWidget from "scenes/widgets/ObservancesWidget";
import UnitedStatesWidget from "scenes/widgets/UnitedStatesWidget";
import UserWidget from "scenes/widgets/UserWidget";


const HomePage = () => {

  const {_id, picturePath} = useSelector(state => state.user)
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget />
          <Box mt='2rem'></Box>
          <ContactWidget />
          {!isNonMobileScreens && <>
          <Box m='2rem 0'></Box>
          <Box flexBasis="26%">
          <UnitedStatesWidget />
          
          </Box></>}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "26%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
         <MyObservancesWidget userId={_id} picturePath={picturePath} /> 
         <ObservancesWidget />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">
          <UnitedStatesWidget />
          <Box m='2rem 0' />
          
        </Box>}        
      </Box>  
    </Box>
  )
}
export default HomePage