import styles from "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Menubar from "./components/menubar";
import MainContent from "./components/maincontent";


// All Pages

import Dispatch from "./Pages/Dispatch/Dispatch";
import Actualize from "./Pages/Actualize/Actualize";
import Invoice from "./Pages/Invoice/Invoice";
import Fees from "./Pages/Fees/Fees";
import Quote from "./Pages/Quote/Quote";
import SupplyContract from "./Pages/SupplyContract/SupplyContract";
import Suppliers from "./Pages/Suppliers/Suppliers";
import Price from "./Pages/Price/Price";
import Taxes from "./Pages/Taxes/Taxes";
import ManageData from "./Pages/ManageData/ManageData";
import SalesContract from "./Pages/SalesContract/SalesContract";


function App() {
  return (
    <div className="App">
      <Menubar />
      <MainContent>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Quote />} />
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/actualize" element={<Actualize />} />
            <Route path="/invoice" element={<Invoice  />} />
            <Route path="/supplycontract" element={<SupplyContract />} />
            <Route path="/salescontract" element={<SalesContract />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/price" element={<Price />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/managedata" element={<ManageData />} />
          </Routes>
        </BrowserRouter>
      </MainContent>
    </div>
  );
}

export default App;
