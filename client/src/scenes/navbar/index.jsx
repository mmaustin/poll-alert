//my navbar: Poll Alert: Help Us Ensure Fair Elections, dark mode, home, about, state page menu dropdown, logout
import { useState } from "react";
import { InputLabel, FormHelperText, Box, Button, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery} from "@mui/material";
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close, WhereToVote, HowToVoteTwoTone } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout} from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import unitedStates from "statesFolder";

const Navbar = () => {

  const [state, setState] = useState('');
  const handleChange = e => {
      setState(e.target.value)
  };

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const user = useSelector(state => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `McCray Austin`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="error"
          onClick={()=> navigate('/home')}
          sx={{
            "&:hoover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          POLL<IconButton><WhereToVote color="success" /></IconButton>ALERT
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween backgroundColor='black' borderRadius="9px" padding="0.1rem 1.5rem">
            <InputBase sx={{ color: 'white', fontWeight: 'bold' }} placeholder="Help Us Secure The Vote"/>
            <IconButton>
              <HowToVoteTwoTone color="success" />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* desktop nav */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={()=> dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{fontSize: "25px"}}/>
            ) : (
              <LightMode sx={{color: dark, fontSize: "25px"}} />
            )}
          </IconButton>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Home</Button>
          {/* <Button color='inherit'> */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state}
              label="State"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {unitedStates.map(state => {
                return <MenuItem key={state._id} value={state._id}>{state.name}</MenuItem>
              })}
            </Select>
            <FormHelperText>Select Your State's Page</FormHelperText>
          </FormControl>
          {state && <Button size='small' variant='contained'>Go</Button>}
          {/* </Button> */}
          <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1 rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight
                  }
                }}
                input={<InputBase/>}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={()=> dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
          </FormControl>
        </FlexBetween>
        ) : (
        <IconButton
          onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
        )}
        {/* Mobile Nav */}
        {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position="fixed"
            right="0"
            bottom="0"
            height="100%"
            zIndex="10"
            maxWidth="500px"
            minWidth="300px"
            backgroundColor={background}
          >
            {/* Close icon */}
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton
                onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close/>
              </IconButton>
            </Box>
          {/* Menu Items */}
          <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="2rem">
            <IconButton onClick={()=> dispatch(setMode())} sx={{fontSize: "25px"}}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{fontSize: "25px"}}/>
              ) : (
                <LightMode sx={{color: dark, fontSize: "25px"}} />
              )}
            </IconButton>
            {/* <Message sx={{color: dark, fontSize: "25px"}} />
            <Notifications sx={{color: dark, fontSize: "25px"}} />
            <Help sx={{color: dark, fontSize: "25px"}} /> */}
            <Button color='inherit'>About</Button>
          <Button color='inherit'>Home</Button>
          {/* <Button color='inherit'> */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state}
              label="State"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {unitedStates.map(state => {
                return <MenuItem key={state._id} value={state._id}>{state.name}</MenuItem>
              })}
            </Select>
            <FormHelperText>Select Your State's Page</FormHelperText>
          </FormControl>
          {state && <Button size='small' variant='contained'>Go</Button>}
          {/* </Button> */}
            <FormControl variant="standard" value={fullName}>
                <Select
                  value={fullName}
                  sx={{
                    backgroundColor: neutralLight,
                    width: "150px",
                    borderRadius: "0.25rem",
                    p: "0.25rem 1 rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem"
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight
                    }
                  }}
                  input={<InputBase/>}
                >
                  <MenuItem value={fullName}>
                    <Typography>{fullName}</Typography>
                  </MenuItem>
                  <MenuItem onClick={()=> dispatch(setLogout())}>Log Out</MenuItem>
                </Select>
            </FormControl>
            {/* <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1 rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight
                  }
                }}
                input={<InputBase/>}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={()=> dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl> */}
          </FlexBetween>          
          </Box>
        )}
    </FlexBetween>
  )
}
export default Navbar