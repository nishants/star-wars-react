import React from 'react';
import {connect} from 'react-redux';
import MenuItemLoader from '../menu-item-loader-component';


const SelectPlanets = ({planets, onSelect})=> {
    const
        toPlanetsListElement = (planet)=> (
            <li className={planet.assigned ? 'assigned' : ''} onClick={()=>{onSelect(planet)}} key={planet.name}>
              <div>
                <img className='icon' alt={planet.name} src={planet.img}/>
                <div className='detail'>
                  <span className='name'>{planet.name} &nbsp;</span>
                  <span className='caption'>({planet.distance} Megamiles)</span>
                </div>
              </div>
            </li>
        );

  return(
      <div className='sub-menu select-planet'>
        <label> 1. Select Planet</label>
        <ul className='planets'>
          {!planets.length && <MenuItemLoader/>}
          {planets.map(toPlanetsListElement)}
        </ul>
      </div>
  );
};

const mapStateToProps = ({planets})=>  ({planets});


export default connect(mapStateToProps)(SelectPlanets);