import { Box } from "@mui/material"
import Sidebar from "../../sections/Chat/Sidebar"
import ChatWindow from "../../sections/Chat/ChatWindow"

const Home = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
    {/* Side Bar */}
    <Sidebar />
    <ChatWindow />
  </Box>
  )
}

export default Home