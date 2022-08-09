import React, { Component } from "react";
import './Pokemon.css'

class Pokemon extends Component {
  render() {

    const { pokemon } = this.props;
    const {name, type, averageWeight, image} = pokemon;

    return (
      <div className="pokemon-card">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image}></img>
      </div>
    )
  }
}

export default Pokemon;