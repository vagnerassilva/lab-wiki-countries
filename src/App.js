import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CountriesList from "./CountriesList";
import CountryDetail from "./CountryDetail";

import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/countries" component={CountriesList} />
        <Route path="/countries/:dinossauro" component={CountryDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
