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
      <UserWidget/>
      <UserImage image='us-flag.jpeg' />
      <UserImage image={picturePath} />
        <button onClick={() => navigate(`/profile/${_id}`)} >Your Page</button>
    </Box>
  )
}
export default HomePage