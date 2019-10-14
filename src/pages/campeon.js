import React from 'react'
import Header from '../components/header';
import { Link } from "react-router-dom";
import btn from '../assets/btn.png'

import './campeon.scss';
import '../App.scss';


const Campeon = (props) => {


  return (
    <div>
      <Header />
      <section className="container-champion">
        <img src={props.location.state.splash} alt="campeon" className="container-champion__img" />
        <div className="container-champion__letters">
          <figure > <Link to={{ pathname: `/home/` }} > <img src={btn} alt="btn-back" /></Link></figure>
          <h2 className="container-champion__name">{props.location.state.id}</h2>
          <h3>{props.location.state.title}</h3>
          <div className="container-champion-letters__tags" >
            {props.location.state.tags.map(element => <h3 key={element}>{element}</h3>)}
          </div>
          <h3> <span>Ataque:</span> {props.location.state.info.attack}</h3>
          <h3> <span>Defensa:</span> {props.location.state.info.defense}</h3>
          <h3> <span>Dificultad:</span> {props.location.state.info.difficulty}</h3>
          <h3> <span>Magia:</span>  {props.location.state.info.attack}</h3>
          <h3> <span>Daño de ataque:</span>  {props.location.state.stats.attackdamage}</h3>
          <h3> <span>Velocidad de movimiento:</span>  {props.location.state.stats.movespeed}</h3>
          <h3> <span> Rango  de ataque:</span> {props.location.state.stats.attackrange}</h3>
        </div>
      </section>
    </div>
  );
}

export default Campeon;