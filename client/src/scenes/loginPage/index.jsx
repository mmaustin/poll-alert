import { Box } from "@mui/material";
import { useSelector } from "react-redux";


const LoginPage = () => {

  const states = useSelector(state => state.unitedStates);
  const st = states.filter(s => s._id === 'xlzqptycg10');
  const {flagPicturePath} = st[0];

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
    </>
  )
}
export default LoginPage