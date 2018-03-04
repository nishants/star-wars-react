import React from 'react';

const MenuItemLoader = ({vehicles, planet, onSelect})=> (
    <li className='loader'>
      <div className='fa fa-circle-o-notch fa-spin'> </div>
    </li>
);


export default MenuItemLoader;