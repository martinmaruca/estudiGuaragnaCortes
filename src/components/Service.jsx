import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faCarBurst, faFileLines, faScaleBalanced, faChildReaching  } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
  return (
    <section className="w-[90%] h-full font-montserrat bg-appwhite container mx-auto px-4 py-5" id='service'>
        <h2 className="text-4xl my-16">Nuestras áreas de práctica</h2>
        <div className="grid grid-cols-4 gap-8 grid-flow-row text-center">
            <div className="h-52 w-52 shadow-2xl rounded-lg flex flex-col justify-center transform hover:scale-125">
                <a href="">
                <FontAwesomeIcon icon={faSuitcase} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Accidente laboral  ART</p>
                </a>
            </div>
            <div className="h-52 w-52 shadow-2xl rounded-lg flex flex-col justify-center transform hover:scale-125">
                <a href="">
                <FontAwesomeIcon icon={faCarBurst} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Accidente de tránsito</p>
                </a>
            </div>
            <div className="h-52 w-52 shadow-2xl rounded-lg flex flex-col justify-center transform hover:scale-125">
                <a href="">
                <FontAwesomeIcon icon={faFileLines} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Sucesiones</p>
                </a>
            </div>
            <div className="h-52 w-52 shadow-2xl rounded-lg flex flex-col justify-center transform hover:scale-125">
                <a href="">
                <FontAwesomeIcon icon={faScaleBalanced} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Derecho Laboral</p>
                </a>
            </div>
            <div className="h-52 w-52 shadow-2xl rounded-lg mb-16 flex flex-col justify-center transform hover:scale-125">
                <a href="">
                <FontAwesomeIcon icon={faChildReaching} className='text-apporange text-8xl mb-5'/>
                <p className='font-semibold px-3'>Derecho de familia</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Service