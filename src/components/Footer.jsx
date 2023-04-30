import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className=' w-full h-96 grid grid-cols-3 gap-8 grid-flow-row bg-appgray font-roboto text-appwhite p-5'>
      <div className='flex flex-col items-center justify-center'>
        <img className="w-48 mb-10" src="./logo.png" alt="logo guaragna cortes asoc." />
        <p className='text-xl'>Estudio Jurídico Guaragna-Cortes y Asoc.</p>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <h2 className='text-xl mb-5'>Nuestras redes sociales</h2>
        <div>
          <a href="https://www.instagram.com/estudiojuridicoguaragnacortes/" target='blank'><FontAwesomeIcon icon={faInstagram} className='text-appwhite text-5xl mr-5'/></a>
          <a href="https://www.facebook.com/profile.php?id=100070633166457&paipv=0&eav=AfbujbluuJVPe3gmFsTVLytdt6r49eRFh1WBVfXZKRQb_n-FX717GK7-QYJ3NTSWGJ0"  target='blank'><FontAwesomeIcon icon={faFacebookSquare} className='text-appwhite text-5xl'/></a>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-lg'>2023 © - Desengo - Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer