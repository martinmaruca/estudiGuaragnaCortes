import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  const [isOpen, setIsOpen ] = useState(false)

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-apporange relative z-10 lg:-px-16 md:px-12 sm:px-8'>
        <div className='w-full flex justify-end items-end '>
          <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
            <span className={`bg-appwhite transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-appwhite transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-appwhite transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
        <div className='w-full flex justify-between items-center lg:hidden '>
          <nav className='menu navbar w-full'>
              <ul className="flex w-full items-end justify-end mr-10 font-roboto font-semibold text-appwhite  ">
                <li className="mr-4"><Link smooth to="/">incio</Link></li>
                <li className="mr-4"><HashLink smooth to="#aboutus">Nosotros</HashLink></li>
                <li className="mr-4"><HashLink smooth to="#service">Servicios</HashLink></li>
                <li><HashLink smooth to="#contact">Contacto</HashLink></li>
              </ul>
          </nav>
        </div>

        {
            isOpen ?
            <div 
            className='min-w-[70vw]  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-apporange/70 rounded-lg backdrop-blur-md py-32
            '>
              <nav className='menu navbar '>
                <ul className="flex flex-col w-full items-end justify-end mr-10 font-roboto font-semibold text-appwhite  ">
                  <li className='mb-2'><HashLink smooth to="/">incio</HashLink></li>
                  <li className='mb-2'><HashLink smooth to="#aboutus">Nosotros</HashLink></li>
                  <li className='mb-2'><HashLink smooth to="#service">Servicios</HashLink></li>
                  <li><HashLink smooth to="#contact">Contacto</HashLink></li>
                </ul>
              </nav>
            </div>
            : null
        }
        
        <div className="w-20 absolute ">
          <img src="./logo.png" alt="logo guaragna cortes asoc." />
        </div>
    </header>
  )
}

export default NavBar