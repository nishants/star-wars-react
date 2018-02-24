import React from 'react';
import {connect} from 'react-redux';


const SelectVehicle = ({vehicles, onSelect})=> {
    const
        loaderElement = (
            <li className='loader'>
              <div className='fa fa-circle-o-notch fa-spin'> </div>
            </li>),
        toVehicleListElement = (vehicle)=> (
            <li onClick={()=>{onSelect(vehicle)}} key={vehicle.name}>
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
        {vehicles.map(toVehicleListElement)}
      </ul>
  );
};

const mapStateToProps = ({vehicles})=>  ({vehicles});


export default connect(mapStateToProps)(SelectVehicle);