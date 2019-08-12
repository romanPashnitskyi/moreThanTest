import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavigationBar.scss'

const NavigationBar = (props) => {
  return (
    <div className='navigation'>
      <NavLink to={props.back}>
        <button className='button'>Back</button>
      </NavLink>
      <NavLink to={props.forward}>
        <button className='button'>Forward</button>
      </NavLink>
    </div>
  )
};

export default NavigationBar;
