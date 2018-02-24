import React from 'react';
import SelectPlanets from './select-planets/select-planets-component';

const MissionsWidget = ()=> (
    <div id='missions-widget' className='create'>
      <div className='backdrop'></div>
      <div className='actions'>
        <button className='create'>Create a mission</button>
      </div>
      <div className='menu'>
        <div className='sub-menu select-planet'>
          <label> 1. Select Planet</label>
          <SelectPlanets/>
        </div>
      </div>
    </div>
);

export default MissionsWidget;