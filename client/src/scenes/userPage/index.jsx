import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import UpdateUserForm from './UpdateUserForm';
import Navbar from "scenes/navbar";



const UpdateUser = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");  

  return (
    <Box>
      <Navbar/>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem", color: 'error.main'}} >
          Update User Profile
          <Typography fontWeight='500' sx={{mb: "1.5rem", color: 'primary.main'}} >
            (you will be redirected to the Login Page upon submission)
          </Typography>
        </Typography>
        <UpdateUserForm/>
      </Box>      
    </Box>
  )
}
export default UpdateUser;