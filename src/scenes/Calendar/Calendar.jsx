import { useState } from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
  } from "@mui/material";
  import Header from "../../component/Header";
  import { tokens } from "../../Theme";

  const Calendar = () => {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(date);
    };
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
    
        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }
    const handleEventClick = (selected) => {
        if (
            window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`

            )
        ){
            selected.event.remove();
        }
    }

    return(
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

            <Box display= "flex" justifyContent="space-between">
                <Box flex= "1 1 20%" backgroundColor= {colors.primary[400]}
                p="15px"
                borderRadius="4px">
                    <Typography variant="h5">Event</Typography>
                    <List>
                        {
                            currentEvents.map((event)=> (
                                <ListItem key={event.id} sx={{ backgroundColor: colors.greenAccent[500],
                                margin: "5px 0",
                                 borderRadius:"2px",
                                 }}
                                 >
                                    <ListItemText primary={event.title}
                                    secondary={<Typography>
                                       {formatDate(event.start)}
                                    </Typography>}/>
                                    
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>

                <Box flex="1 1 100%" ml="10px">
                    <FullCalendar height="70vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    headerToolbar ={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGrid,listMonth",
                    }}
                    initialView= "dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events)=>setCurrentEvents(events)}
                    initialEvents={[
                        {
                            id: "12315",
                            title: "All-day event",
                            date: "2022-09-14",
                          },
                          {
                            id: "5123",
                            title: "Timed event",
                            date: "2022-09-28",
                          },
                    ]}
                    />

                </Box>
            </Box>

        </Box>
    )
  }


  export default Calendar