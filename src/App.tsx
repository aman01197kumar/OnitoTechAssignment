import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalDetails from "./pages/PersonalDetails";
import AddressDetails from "./pages/AddressDetails";
import DataTableShow from "./pages/DataTableShow";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PersonalDetails/>}/>
      <Route path="address-details" element={<AddressDetails/>}/>
      <Route path="data-table" element={<DataTableShow/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
