import React from 'react'
import Header from '../components/header';


const Campeon = (props) => {
    
 
  return (
    <div> 
      <Header/>
      <img src={props.location.state.splash} alt="campeon"  />
       <h2>{props.location.state.id}</h2> 
       <h3>{props.location.state.title}</h3>
       <h3>{props.location.state.tags}</h3>
       <h3> Ataque: {props.location.state.info.attack}</h3>
       <h3> Defensa: {props.location.state.info.defense}</h3>
       <h3> dificultad: {props.location.state.info.difficulty}</h3>
       <h3> Magia: {props.location.state.info.attack}</h3>
       <h3> Daño de ataque {props.location.state.stats.attackdamage}</h3>
       <h3> Velocidad de movimiento {props.location.state.stats.movespeed}</h3>
       <h3> Rango  de ataque {props.location.state.stats.attackrange}</h3>   
    </div>
  );
}

export default Campeon;