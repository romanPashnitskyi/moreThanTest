import React from 'react'

import NavigationBar from "../components/NavigationBar"

const ThirdPage = () => {
  return (
    <div className='main'>
      <NavigationBar back='/second' forward='/'/>
      Third Page!
    </div>
  )
};

export default ThirdPage;
