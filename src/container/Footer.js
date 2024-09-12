import React from 'react'
import { images } from '../assets/images'

const Footer = () => {
  return (
    <footer className='py-4 mt-4 shadow'>
      <div className='container m-auto'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='logo'>
              <img src={images.logo} width={50} height={50} />
            </div>
            <div className='flex justify-start'>
              <span className='w-16'>Email:</span>
              <a href='mailto:harrymoon1862@gmail.com'>harrymoon1862@gmail.com</a>
            </div>
            <div className='flex justify-start'>
              <span className='w-16'>Phone:</span>
              <a href='tel:0372455133'>+84 372 455 133</a>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3>Column 1</h3>
            <ul>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 2</a></li>
              <li><a href='#'>Link 3</a></li>
              <li><a href='#'>Link 4</a></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3>Column 2</h3>
            <ul>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 2</a></li>
              <li><a href='#'>Link 3</a></li>
              <li><a href='#'>Link 4</a></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3>Column 3</h3>
            <ul>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 2</a></li>
              <li><a href='#'>Link 3</a></li>
              <li><a href='#'>Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
