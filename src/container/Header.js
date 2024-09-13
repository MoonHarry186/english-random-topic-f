import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images'
const Header = () => {
  return (
    <header className='mb-4 shadow'>
      <div className='container m-auto'>
        <div className='flex justify-between py-4'>
        <div className='logo'>
          <img src={images.logo} width={50} height={50} alt='Header Logo'/>
        </div>
        <nav className='flex items-center'>
          <ul className='flex items-center justify-between gap-10'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topic">Random Topic</Link>
            </li>
            <li>
              <Link to="/add-topic">Add More Topic</Link>
            </li>
            <li>
              <Link to="/topics-list">Topics List</Link>
            </li>
          </ul>
        </nav>
        </div>
        
      </div>
    </header>
  )
}

export default Header
