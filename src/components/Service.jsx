import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faCarBurst, faFileLines, faScaleBalanced, faChildReaching  } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
  return (
    <section className="w-full h-full font-montserrat bg-appwhite container mx-auto px-4 py-5">
        <h2 className="text-4xl my-16">Nuestras áreas de práctica</h2>
        <div className="grid grid-cols-4 gap-8 grid-flow-row text-center">
            <div className="h-60 w-60 shadow-2xl rounded-lg flex flex-col justify-center">
                <FontAwesomeIcon icon={faSuitcase} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Accidentes de trabajo  ART</p>
            </div>
            <div className="h-60 w-60 shadow-2xl rounded-lg flex flex-col justify-center">
                <FontAwesomeIcon icon={faCarBurst} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Accidentes de tránsito</p>
            </div>
            <div className="h-60 w-60 shadow-2xl rounded-lg flex flex-col justify-center">
                <FontAwesomeIcon icon={faFileLines} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Sucesiones</p>
            </div>
            <div className="h-60 w-60 shadow-2xl rounded-lg flex flex-col justify-center">
                <FontAwesomeIcon icon={faScaleBalanced} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Derecho Laboral</p>
            </div>
            <div className="h-60 w-60 shadow-2xl rounded-lg mb-16 flex flex-col justify-center">
                <FontAwesomeIcon icon={faChildReaching} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Derecho de familia</p>
            </div>
        </div>
    </section>
  )
}

export default Service