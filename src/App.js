import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Common from "./pages/Common/Common";
import AvailableShops from "./pages/User/AvailableShops/AvailableShops";
import Slots from "./pages/User/Slots/Slots";
import Login from "./components/Login/Login";
import LoginPage from "./pages/LoginPage/Login";
import SlotsTable from "./components/Slotstables/SlotTable";


const theme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#081220",
      paper: "#081220",
    },
    primary: {
      main: "#1799E1",
    },
    secondary: {
      main: "#1799E1",
    },
    // whitetext: {
    // 	main: "#fafafa",
    // },
    // pureWhite: {
    // 	main: "#FFFFFF",
    // },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"
              component={Common} />
            <Route path="/availableshops"
              component={AvailableShops} />
            <Route path="/viewslots"
              component={Slots} />
            <Route path="/userlogin"
              component={LoginPage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
