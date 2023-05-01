import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className="w-full h-screen font-montserrat bg-appwhite container mx-auto px-4 py-5 flex mt-16" id='contact'>
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
        <form className="w-1/2  mt-16 flex flex-col" name='consulta' netlify>
            <input className="border-2 border-apporange rounded-md mb-5 p-1" type="text" placeholder="Nombre"/>
            <input className="border-2 border-apporange rounded-md mb-5 p-1" type="email" placeholder="Email"/>
            <input className="border-2 border-apporange rounded-md mb-5 p-1" type="phone" placeholder="Teléfono"/>
            <input className="border-2 border-apporange rounded-md mb-5 p-1" type="text" placeholder="Dirección"/>
            <input className="border-2 border-apporange rounded-md mb-5 p-1" type="text" placeholder="Asunto"/>
            <textarea className="border-2 border-apporange rounded-md mb-5 p-1" name="mensaje" id="" cols="30" rows="8" placeholder="Mensaje"></textarea>
            <button className="bg-apporange px-16 py-3 rounded-md font-semibold mb-5 hover:bg-appwhite border-2 border-solid border-apporange hover:border-apporange">Enviar</button>
        </form>
    </section>
  )
}

export default Contact