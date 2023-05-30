import { Box } from "@mui/material";


const LoginPage = () => {
  return (
    <>
      <div>Login</div>
      <Box width='80px' height='80px'>
            <img
                style={{objectFit: "cover", borderRadius: "50%"}}
                width='80px'
                height='80px'
                alt="user"
                src='http://localhost:5001/assets/nevada.jpg'
            />        
      </Box>
    </>
  )
}
export default LoginPage