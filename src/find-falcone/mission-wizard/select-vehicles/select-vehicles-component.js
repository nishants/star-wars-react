import React from 'react';
import {connect} from 'react-redux';
import MenuItemLoader from '../menu-item-loader-component';


const SelectVehicle = ({vehicles, planet, onSelect})=> {
    const
        toVehicleListElement = (vehicle)=> (
            <li className={ (vehicle.left ? '' : 'none-left ') + (vehicle.range < planet.distance ? 'no-range' : '')} onClick={()=>{onSelect(vehicle)}} key={vehicle.name}>
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
      <div className='sub-menu select-vehicle'>
        <label> 2. Select Vehicle</label>
        <ul className='vehicles'>
          {!vehicles.length && <MenuItemLoader/>}
          {planet && vehicles.map(toVehicleListElement)}
        </ul>
      </div>
  );
};

const mapStateToProps = ({vehicles})=>  ({vehicles});


export default connect(mapStateToProps)(SelectVehicle);