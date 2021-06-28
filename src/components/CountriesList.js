import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries";

class CountriesList extends React.Component {
  state = {
    countries: [...countries],
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
        {this.state.countries.map((country) => {
            return (
              <div class="col-5" style="max-height: 90vh; overflow: scroll">
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action" to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                 </div>
             </div>
  
            );
        })}
        </div>
       </div>
    );
    }
}

export default CountriesList;
