import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'

const Contact = () => {
  return (
    <section className="w-[90%] h-full font-montserrat bg-appwhite mx-auto px-4 py-5 flex justify-between flex-wrap mt-16" id='contact'>
        <div className="mt-16 sm:w-[90%]">
            <h2 className="font-semibold text-4xl sm:text-3xl mb-10">CONTÁCTENOS</h2>
            <div>
              <div className='flex'>
                <FontAwesomeIcon icon={faLocationDot} className='text-apporange text-2xl mr-4'/>
                <p className="mb-4 text-lg sm:text-md">Cavallar N° 1487 - 9 de Julio - Argentina</p>
              </div>
              <div className='flex'>
                <FontAwesomeIcon icon={faPhone} className='text-apporange text-2xl mr-4'/>
                <p className="mb-4 text-lg sm:text-md">02317-418366</p>
              </div>
              <div className='flex'>
                <FontAwesomeIcon icon={faEnvelope} className='text-apporange text-2xl mr-4'/>
                <p className="mb-4 text-lg sm:text-[16px]">estudiocortesguaragna@gmail.com</p>
              </div>
            </div>
        </div>
        <div className='w-1/2 sm:w-full h-full mb-16'>
          <Form/>
        </div>
    </section>
  )
}

export default Contact