import { Box } from "@mui/material";
//import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";

const HomePage = () => {

  //const {_id, picturePath} = useSelector(state => state.user);

  return (
    <Box>
      <Navbar />
      {/* <Box width='80px' height='80px'>
            <img
                style={{objectFit: "cover", borderRadius: "50%"}}
                width='80px'
                height='80px'
                alt="user"
                src={`http://localhost:5001/assets/${picturePath}`}
            />
        </Box> */}
    </Box>
  )
}
export default HomePage