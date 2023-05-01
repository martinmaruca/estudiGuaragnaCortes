import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCarBurst, faPersonDigging } from '@fortawesome/free-solid-svg-icons'

const InfoSection = () => {
  return (
    <section className="w-full h-full bg-appgray font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl text-appwhite pt-20">¿Como proceder en caso de sufrir un accidente?</h2>
        <div className="flex mt-10 text-3xl text-appwhite">
          <div className="w-1/2 h-[70vh] flex flex-col items-center justify-between border-r-2 ">
              <h2>Tránsito</h2>
              <FontAwesomeIcon icon={faCarBurst} className='text-apporange text-7xl mb-5'/>
              <p className='w-[70%]'>Aqui puedes encontrar todo lo que necesitas en caso de sufrir un accidente de tránsito.</p>
              <div className='w-[70%] flex justify-end'>
                <a href='/'>
                <FontAwesomeIcon icon={faArrowRight} className='w-full flex justify-self-end text-apporange text-4xl mb-5 hover:text-6xl transform animate-bounce transition-all'/>
                </a>
              </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-between">
              <h2>Laboral</h2>
              <FontAwesomeIcon icon={faPersonDigging} className='text-apporange text-7xl mb-5'/>
              <p className='w-[70%]'>Aqui puedes encontrar todo lo que necesitas en caso de sufrir un accidente laboral.</p>
              <div className='w-[70%] flex justify-end'>
                <a href='/' className='w-0'>
                <FontAwesomeIcon icon={faArrowRight} className='text-apporange text-4xl mb-5 hover:text-6xl transform animate-bounce transition-all'/>
                </a>
              </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default InfoSection