import React from 'react';
import {connect} from 'react-redux';


const SelectVehicle = ({vehicles, planet, onSelect})=> {
    const
        loaderElement = (
            <li className='loader'>
              <div className='fa fa-circle-o-notch fa-spin'> </div>
            </li>),
        toVehicleListElement = (vehicle)=> (
            <li className={ (vehicle.left ? '' : 'none-left') + (vehicle.range < planet.distance ? 'no-range' : '')} onClick={()=>{onSelect(vehicle)}} key={vehicle.name}>
              <div>
                <img className='icon' alt={vehicle.name} src={'assets/' + vehicle.img}/>
                <div className='detail'>
                  <span className='name'>{vehicle.name} &nbsp;</span>
                  <span className='caption'>{vehicle.speed} Megamiles per day, {vehicle.left} left</span>
                </div>
              </div>
            </li>
        );

  return(
      <ul className='vehicles'>
        {!vehicles.length && loaderElement}
        {planet && vehicles.map(toVehicleListElement)}
      </ul>
  );
};

const mapStateToProps = ({vehicles})=>  ({vehicles});


export default connect(mapStateToProps)(SelectVehicle);