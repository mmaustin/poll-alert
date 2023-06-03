import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import StatePage from "scenes/statePage";
import {createTheme} from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import UserPage from "scenes/userPage";


function App() {

  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isAuth = Boolean(useSelector(state => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/home' element={isAuth ? <HomePage/> : <Navigate to="/"/>} />
            <Route path='/state/:stateId' element={isAuth ? <StatePage/> : <Navigate to="/"/>} />
            <Route path='/user/:userId' element={isAuth ? <UserPage/> : <Navigate to='/'/>} />
            {/* <Route path='/home' element={<HomePage/>} />
            <Route path='/state/:stateId' element={<StatePage/>} />
            <Route path='/user/:userId' element={<UserPage/>} /> */}
          </Routes>
        </ThemeProvider>   
      </BrowserRouter>
    </div>
  );
}

export default App;
