import React from 'react';

const ListMissions = ()=> (
    <div id='missions-selected'>
      <ul className='missions'>
        <li>
          <div className='planet'> Planet</div>
          <div className='vehicle'> Vehicle</div>
          <div className='overview'>Go get it </div>
          <div className='cancel'>
            <div className='no-mobile fa fa-remove'></div>
            <div className='mobile-only'> Delete </div>
          </div>
        </li>
      </ul>
    </div>
);

export default ListMissions;