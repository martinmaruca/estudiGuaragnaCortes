
const NavBar = () => {
  return (
    <div className="h-20 bg-apporange flex justify-between ">
        <div className="w-20 ml-10">
        <img src="./logo.png" alt="logo guaragna cortes asoc." />
        </div>
        <nav>
            <ul className="flex w-full h-20 items-center justify-center mr-10 font-roboto font-semibold text-appwhite  ">
                <li className="mr-4">Nosotros</li>
                <li className="mr-4">Servicios</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar