import { Box } from "@mui/material";
import Header from "../../component/Header";
import Barchart from "../../component/Barchart";


const Bar = () =>{
    return(
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
            <Box height="70vh">
             <Barchart/>
            </Box>
        </Box>
    )
}

export default Bar;
