import { Route, Routes } from "react-router-dom";
import { Consumption } from "../pages/Consumption";
import { Graphics } from "../pages/Graphics";
import { Login } from "../pages/Login";
import { Services } from "../pages/Services";
import { DefaultPage } from "../pages/DefaultPage";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route index element={<Login />}/>
        <Route path="services" element={<Services />}/>
        <Route path="consumption" element={<Consumption />}/>
        <Route path="graphics" element={<Graphics />}/>
      </Route>
    </Routes>
  )
}