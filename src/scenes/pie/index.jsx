import { Box } from "@mui/material";
import Header from "../../component/Header";
import PieChart from "../../component/pieChart";
const Pie = () =>{
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
            <Box height="70vh">
             <PieChart/>
            </Box>
        </Box>
    )
}

export default Pie;



