import { useState } from "react";
import { colorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/Calendar/Calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Lines from "./scenes/Lines";
import Geography from "./scenes/geography";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
   <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
       <Sidebar  isSidebar={isSidebar}/>
       <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
         <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} /> 
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Lines />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
        </main>
      </div>
    </ThemeProvider>
   </colorModeContext.Provider>
  );
}

export default App;
