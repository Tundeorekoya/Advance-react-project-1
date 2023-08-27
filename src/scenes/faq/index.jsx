import { Box,useTheme,Typography } from "@mui/material";
import Header from "../../component/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../Theme";


const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)


    return(
        <Box m="15px" defaultExpanded>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion sx={{borderRadius:"0.5rem"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h6" sx={{fontSize:"16px"}}>
                An important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsam officiis 
                        aliquam hic quod tenetur iusto aut minima, temporibus necessitatibus libero eaque 
                        voluptas? Iure ducimus perferendis asperiores, assumenda atque impedit?
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion sx={{borderRadius:"0.5rem"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h6" sx={{fontSize:"16px"}}>
                Your Favorite Question              
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsam officiis 
                        aliquam hic quod tenetur iusto aut minima, temporibus necessitatibus libero eaque 
                        voluptas? Iure ducimus perferendis asperiores, assumenda atque impedit?
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion sx={{borderRadius:"0.5rem"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h6" sx={{fontSize:"16px"}}>
                Some Random Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsam officiis 
                        aliquam hic quod tenetur iusto aut minima, temporibus necessitatibus libero eaque 
                        voluptas? Iure ducimus perferendis asperiores, assumenda atque impedit?
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion  sx={{borderRadius:"0.5rem"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h6" sx={{fontSize:"16px"}}>
                The Final Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsam officiis 
                        aliquam hic quod tenetur iusto aut minima, temporibus necessitatibus libero eaque 
                        voluptas? Iure ducimus perferendis asperiores, assumenda atque impedit?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion   sx={{borderRadius:"0.5rem"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h6" sx={{fontSize:"16px"}}>
                An Important Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"16px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsam officiis 
                        aliquam hic quod tenetur iusto aut minima, temporibus necessitatibus libero eaque 
                        voluptas? Iure ducimus perferendis asperiores, assumenda atque impedit?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;




