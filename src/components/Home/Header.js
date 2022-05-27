import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLanguage, MdExpandMore } from 'react-icons/md';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const logo = require ('../assets/logo.png');

function Header() {
  return (
    <div className='container bg-white z-50 sticky top-0 flex items-center mx-5 mt-1 text-blue-900 justify-between'>
       <Link to='/'>
       <div className='flex items-center'>
          <img
            src={logo}
            alt='Logo'
            className='w-12'
          />
          <h2 className='font-bold text-2xl sm:visible invisible text-orange-600'><span className='rotate-12'>Z</span>URU</h2>
        </div>
       </Link>
      
      <div className='flex items-center box-board'>
        <input type='text'/>
        <AiOutlineSearch/>
      </div>
      <div className='flex items-center space-x-2'>
        <p>Become a host</p>
        <MdLanguage/>
        <MdExpandMore/>
        <Avatar/>
      </div>
    </div>
  )
}

export default Header