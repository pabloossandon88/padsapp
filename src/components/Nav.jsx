import React from 'react'
import menuSvg from '../assets/img/menu.svg'

const Nav = () => {
  return (
    <>
       <nav>
        <ul>
          <li><img src={menuSvg}  alt="" /></li>
          <li className="title">PadsAPP</li>
        </ul>
      </nav>
    </>
  )
}


export default Nav