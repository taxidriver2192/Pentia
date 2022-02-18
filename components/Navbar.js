import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='navbarContainer'>
        <button
          className='navbarButton'
          onClick={handleClick}
        >
          <svg
            width={50}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              color='#ffffff'
              strokeWidth={1}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        
      </nav>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
          className={`${
            active ? '' : 'hidden'
          }  navbarMenu`}
        >
        <ul>
          <li className='test1 '>
          <Link href='/'>
              <a className='testA'>
                Home
              </a>
            </Link>
            </li>
            <li className='test1 '>
          <Link href='/'>
              <a className='testA'>
                Home
              </a>
            </Link>
            </li>
            <li className='test1 '>
          <Link href='/'>
              <a className='testA'>
                Home
              </a>
            </Link>
            </li>
            <li className='test1 '>
          <Link href='/'>
              <a className='testA'>
                Home
              </a>
            </Link>
            </li>
          </ul>
        </div>
    </>
  );
};
