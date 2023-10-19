import { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "../assets/icons";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

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
      <nav className='flex md:hidden relative items-center justify-between px-2 pt-4 pb-2 border-b-2 border-black'>
        <p>THE FACTORY</p>
        <div>
          {toggleMobileNav ? (
            <span onClick={handleToggle}>
              {/* <XMarkIcon /> */}
              <img src={close} alt='' className='w-6' />
            </span>
          ) : (
            <span onClick={handleToggle}>
              {/* <Bars3BottomRightIcon /> */}
              <img src={menu} alt='' className='w-6' />
            </span>
          )}
          {toggleMobileNav && (
            <ul className='absolute top-10 left-0 right-0 p-4 flex flex-col gap-3 w-full bg-white z-10 items-center border-b-2 border-black '>
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
