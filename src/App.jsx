import { Box } from "@mui/material";
import Sidebar from "./sections/Chat/Sidebar";
import ChatWindow from "./sections/Chat/ChatWindow";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/dashboard/Home";

function App() {
  return (
    <>
     
      <Routes>
       <Route path="/login" element={<Login />}/>
       <Route  element={<Home />} index/>
      </Routes>
    </>
  );
}

export default App;
