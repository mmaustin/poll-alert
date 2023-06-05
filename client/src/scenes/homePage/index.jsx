import { Box } from "@mui/material";
import UserImage from "components/UserImageWidget";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";




const HomePage = () => {

  const navigate = useNavigate();
  const {_id, picturePath} = useSelector(state => state.user);

  return (
    <Box>
      <Navbar />
      <Box>
        <UserWidget/>
      </Box>
    </Box>
  )
}
export default HomePage