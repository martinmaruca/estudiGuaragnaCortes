import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className=' w-full h-96 sm:h-full  flex  justify-center bg-appgray font-roboto text-appwhite p-5'>
    <div className='w-[90%] grid grid-cols-3 gap-8 grid-flow-row sm:flex sm:justify-center sm:flex-wrap  '>
      <div className='flex flex-col items-center justify-center'>
        <img className="w-48 sm:w-32 sm:mb-5 mb-10" src="./logo.png" alt="logo guaragna cortes asoc." />
        <p className='text-lg sm:text-sm'>Estudio Jurídico Guaragna-Cortes y Asoc.</p>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <h2 className='text-xl sm:text-lg mb-5'>Nuestras redes sociales</h2>
        <div>
          <a href="https://www.instagram.com/estudiojuridicoguaragnacortes/" target='blank'><FontAwesomeIcon icon={faInstagram} className='text-appwhite text-5xl sm:text-3xl mr-5 hover:text-apporange'/></a>
          <a href="https://www.facebook.com/profile.php?id=100070633166457&paipv=0&eav=AfbujbluuJVPe3gmFsTVLytdt6r49eRFh1WBVfXZKRQb_n-FX717GK7-QYJ3NTSWGJ0"  target='blank'><FontAwesomeIcon icon={faFacebookSquare} className='text-appwhite text-5xl sm:text-3xl hover:text-apporange'/></a>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-md sm:text-xs'>2023 © - Desengo - Todos los derechos reservados.</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer