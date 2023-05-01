import { HashLink } from 'react-router-hash-link';
import './navbar.css'

const NavBar = () => {
  return (
    <div className="h-20 bg-apporange flex justify-between ">
        <div className="w-20 ml-10">
        <img src="./logo.png" alt="logo guaragna cortes asoc." />
        </div>
        <nav className='menu navbar'>
            <ul className="flex w-full h-20 items-center justify-center mr-10 font-roboto font-semibold text-appwhite  ">
              <li className="mr-4"><HashLink smooth to="#aboutus">Nosotros</HashLink></li>
              <li className="mr-4"><HashLink smooth to="#service">Servicios</HashLink></li>
              <li><HashLink smooth to="#contact">Contacto</HashLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar