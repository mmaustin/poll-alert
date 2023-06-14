import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import ContactWidget from "scenes/widgets/ContactWidget";
import MyObservancesWidget from "scenes/widgets/MyObservancesWidget";
import StateObservancesWidget from "scenes/widgets/StateObservancesWidget";
import StateWidget from "scenes/widgets/StateWidget";
import UserWidget from "scenes/widgets/UserWidget";



const StatePage = () => {

  const {stateId} = useParams();
  const {_id, picturePath, stateId: stId} = useSelector(state => state.user);
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
          <StateWidget stateId={stateId} />
          
          </Box></>}  
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "26%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
        { stateId === stId && (
          <MyObservancesWidget userId={_id} picturePath={picturePath} />
          )
        }
        <StateObservancesWidget stateId={stateId} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">
          <StateWidget stateId={stateId} />
          <Box m='2rem 0' />
          
        </Box>}       
      </Box>  
    </Box>
  )
}
export default StatePage