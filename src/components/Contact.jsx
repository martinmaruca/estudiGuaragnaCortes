import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'

const Contact = () => {
  return (
    <section className="w-[90%] h-screen font-montserrat bg-appwhite container mx-auto px-4 py-5 flex mt-16" id='contact'>
        <div className="w-1/2 mt-16">
            <h2 className="font-semibold text-4xl mb-10">CONTÁCTENOS</h2>
            <div>
              <div className='flex'>
                <FontAwesomeIcon icon={faLocationDot} className='text-apporange text-2xl mr-4'/>
                <p className="mb-4 text-lg">Cavallar N° 1487 - 9 de Julio - Argentina</p>
              </div>
              <div className='flex'>
                <FontAwesomeIcon icon={faPhone} className='text-apporange text-2xl mr-4'/>
                <p className="mb-4 text-lg">02317-418366</p>
              </div>
              <div className='flex'>
                <FontAwesomeIcon icon={faEnvelope} className='text-apporange text-2xl mr-4'/>
                <p className="mb-4 text-lg">estudiocortesguaragna@gmail.com</p>
              </div>
            </div>
        </div>
        <div className='w-full h-full pl-60'>
          <Form/>
        </div>
    </section>
  )
}

export default Contact