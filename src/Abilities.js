import React, {Component} from 'react'
import './css/Abilities.css';

function modCalc(score){
  var mod = Math.floor((parseInt(score) - 10)/2)
  if (mod>=0){
    return "+" + mod;
  }
  else{
    return mod;
  }
}


const AbilitiesParser = (props) => {
  var abilities = [];
  for ( const abilityData of props.abilitiesData  )
  {
    abilities.push(
            <div key={abilityData["name"].toUpperCase()} className="ability">
              <div className="name">{abilityData["name"].toUpperCase()}</div>
              <div className="modifier">{modCalc(abilityData["score"])}</div>
              <div className="score">{abilityData["score"]}</div>
            </div>
          );
  }
  return abilities;
}

const Abilities = (props) => {
  const {abilitiesData} = props
  return (
    <AbilitiesParser abilitiesData={abilitiesData} />
  )
}

export default Abilities
