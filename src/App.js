import { Box, Stack } from "@mui/material";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
