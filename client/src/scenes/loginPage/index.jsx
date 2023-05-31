import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import unitedStates from "statesFolder";
//import { useSelector } from "react-redux";


const LoginPage = () => {

  const navigate = useNavigate();

  //const states = useSelector(state => state.unitedStates);
  const st = unitedStates.filter(s => s._id === 'xlzqptycg10');
  const {flagPicturePath, _id} = st[0];

  return (
    <>
      <div>Login</div>
      <Box width='80px' height='80px'>
            <img
                style={{objectFit: "cover", borderRadius: "50%"}}
                width='80px'
                height='80px'
                alt="user"
                src={`http://localhost:5001/assets/${flagPicturePath}`}
            />        
      </Box>
      <button onClick={() => navigate(`/state/${_id}`)} >State Page</button>
    </>
  )
}
export default LoginPage