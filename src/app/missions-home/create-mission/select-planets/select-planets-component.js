import React from 'react';
import {connect} from 'react-redux';


const SelectPlanets = ({planets, selectPlanet})=> {
    const
        loaderElement = (
            <li className='loader'>
              <div className='fa fa-circle-o-notch fa-spin'> </div>
            </li>),
        toPlanetsListElement = (planet)=> (
            <li onClick={()=>{selectPlanet(planet)}} key={planet.name}>
              <div>
                <img className='icon' alt={planet.name} src={'assets/' + planet.img}/>
                <div className='detail'>
                  <span className='name'>{planet.name} &nbsp;</span>
                  <span className='caption'>({planet.distance} Megamiles)</span>
                </div>
              </div>
            </li>
        );

  return(
      <ul className='planets'>
        {!planets.length && loaderElement}
        {planets.map(toPlanetsListElement)}
      </ul>
  );
};

const mapStateToProps = ({planets})=>  ({planets});

const mapDispatchToProps = (dispatch)=> ({
  selectPlanet: ()=> {}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlanets);