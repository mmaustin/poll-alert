import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";


const HomePage = () => {

  const navigate = useNavigate();
  const {_id, picturePath} = useSelector(state => state.user);

  return (
    <Box>
      <Navbar />
      <Box width='80px' height='80px'>
            <img
                style={{objectFit: "cover", borderRadius: "50%"}}
                width='80px'
                height='80px'
                alt="user"
                src={`http://localhost:5001/assets/${picturePath}`}
            />
        </Box>
        <button onClick={() => navigate(`/user/${_id}`)} >Your Page</button>
    </Box>
  )
}
export default HomePage