import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ObservancePage from "scenes/observancePage";
import StatePage from "scenes/statePage";
import {createTheme} from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";


function App() {

  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/state/:stateId' element={<StatePage/>} />
            <Route path='/observance/:observanceId' element={<ObservancePage/>} />
            {/* <Route path='/home' element={isAuth ? <HomePage/> : <Navigate to="/"/>} />
            <Route path='/state/:stateId' element={isAuth ? <StatePage/> : <Navigate to="/"/>} />
            <Route path='/observance/:observanceId' element={isAuth ? <ObservancePage/> : <Navigate to='/'/>} /> */}
          </Routes>
        </ThemeProvider>   
      </BrowserRouter>
    </div>
  );
}

export default App;
