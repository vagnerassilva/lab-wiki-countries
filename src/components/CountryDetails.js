import React from "react";
import countries from "../countries";

class CountryDetails extends React.Component {
  state = {
    name: "",
    capital: "",
    area: 0,
    borders: [],
  };

  searchCountry = () => {
    if (!this.state.name) {
      const foundCountry = countries.find((country) => {
        return country.cca3 === this.props.match.params.dinossauro;
      });

      if (foundCountry) {
        this.setState({ ...foundCountry });
      }
    }
  };

  render() {
    console.log(this.props);
    this.searchProject();
    return (
      <div className="container mt-5">
        <img src={this.state.picture} alt={this.state.name} />
        <h2>{this.state.name}</h2>
        <p>{this.state.year}</p>
        <p>{this.state.technologies}</p>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default CountryDetails;
