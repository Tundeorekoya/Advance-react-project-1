import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import Header from "../../component/Header";
 
const Dashboard = () => {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
    </Box>
  )
}

export default Dashboard 
