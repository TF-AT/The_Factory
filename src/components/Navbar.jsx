import { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "../assets/icons";

export default function Navbar() {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  const handleToggle = () => {
    setToggleMobileNav(!toggleMobileNav);
  };
  return (
    <>
      <div className='max-w-7xl mx-auto hidden md:flex items-center justify-between py-4 border-b-2 border-black'>
        <p>THE FACTORY</p>
        <ul className='flex gap-4'>
          <li>
            <a className='text-base' href='/'>
              Home
            </a>
          </li>
          <li>
            <a className='text-base' href='#about'>
              About Us
            </a>
          </li>
          <li>
            <a className='text-base' href='#products'>
              Products
            </a>
          </li>
        </ul>
        <a className='bg-black text-white px-4 py-3 rounded' href='#contact'>
          Contact Us
        </a>
      </div>
      <nav className='flex md:hidden relative justify-between items-center px-2 pt-4'>
        <p>THE FACTORY</p>
        <div>
          {toggleMobileNav ? (
            <span onClick={handleToggle}>
              <XMarkIcon />
            </span>
          ) : (
            <span>
              <Bars3BottomRightIcon />
            </span>
          )}
          {toggleMobileNav && (
            <ul className='abosulute'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='#about'>About us</a>
              </li>
              <li>
                <a href='#products'>Products</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
