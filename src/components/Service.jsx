import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faChildReaching, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

const Data = [
    {
        id: 1,
        p:"Nuestros abogados laboralistas brindan un asesoramiento personalizado y profesional al trabajador. Nuestro plan de trabajo incluye:",
        li1: "Despidos", 
        li2: "Accidentes en el trabajo ART",
        li3: "Acuerdos en el ministerio de trabajo",
        li4: "Regularización de la situación laboral", 
        icon: faSuitcase,
        iconLabel:"Derecho laboral"
    },
    {
        id: 2,
        p:"Somos expertos en derecho de familia y sucesiones, adoptando una férrea defensa de nuestros clientes, intentando atemperar los conflictos hasta el extremo, buscando soluciones conciliatorias, comprendiendo todas las contingencias que puedan llegar a ocurrir.",
        p2:"Nuestro plan de trabajo incluye:",
        li1: "Uniones convivenciales", 
        li2: "Pactos de convivencia",
        li3: "Regimen de visitas",
        li4: "Alimentos",
        icon: faChildReaching,
        iconLabel:"Derecho Familia y sucesiones"
    },
    {
        id: 3,
        p:"En el orden del derecho civil y comercial, no solo nos ocupamos de brindar consultoría jurídica en casos de conflictos y disputas, sino también en la concreción de negocios y vínculos comerciales entre empresas e individuos.",
        p2:"Nuestro plan de trabajo incluye:",
        li1: "Amparos", 
        li2: "Accidentes de tránsito",
        li3: "Daños y perjuicios",
        li4: "Redacción de contratos",
        icon: faScaleBalanced,
        iconLabel:"Derecho Civil y Comercial" 
    },
]

const Service = () => {
    const [modal, setModal] = useState([]);
    const [isOpen, setIsOpen ] = useState(false)

    const handleClick = (item) =>{
        setModal([item]);
        setIsOpen(!isOpen)
    }

  return (
    <section className=" w-full h-full mb-16 sm:mb-0 font-montserrat sm:flex sm:justify-center bg-appwhite  mx-auto px-4 py-16" id='service'>
        <div className='w-[90%]'>
            <h2 className="text-4xl ml-16 sm:text-2xl my-16">Nuestras áreas de práctica</h2>
            <div className=" flex justify-evenly flex-wrap text-center">            
                    {Data.map((item) => {
                    const { id, icon, iconLabel } = item;
                    return (
                        <div key={id} onClick={() => handleClick(item) } className="h-60 w-60 sm:mb-16 shadow-2xl rounded-lg flex flex-col justify-center transform hover:scale-125 cursor-pointer ">
                            <span>
                                <FontAwesomeIcon icon={icon} className='text-apporange text-8xl mb-5'/>
                                <p className='font-semibold px-3'>{iconLabel}</p>
                            </span>
                        </div>
                    );
                    })}
                {
                isOpen ? 
                <div 
                className='min-w-[70vw] h-[70vh] sm:h-full sm:w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-appwhite/75 shadow-2xl rounded-lg backdrop-blur-md
                '>
                    {modal.map((modal) => {
                const {
                    id, p, p2, li1, li2, li3, li4 } = modal;
                return (
                    <div key={id} className='w-full h-96 flex flex-col'>
                        <div className='w-full flex justify-end mb-5'>
                            <button onClick={() => (setIsOpen(false))} className='text-3xl text-apporange font-bold py-5 pr-5'>X</button>
                        </div>

                        <div className='w-full h-full flex flex-col items-center justify-center' >
                            <p className='w-[90%] font-semibold'>{p}</p>
                            <p className='w-[90%] font-semibold'>{p2}</p>
                            <div>
                                <ul className="mb-5 flex flex-col items-start">
                                    <li><span className="text-apporange text-5xl mr-2">•</span>{li1}</li>
                                    <li><span className="text-apporange text-5xl mr-2">•</span>{li2}</li>
                                    <li><span className="text-apporange text-5xl mr-2">•</span>{li3}</li>
                                    <li><span className="text-apporange text-5xl mr-2">•</span>{li4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
                })}
                </div>
                : null
                }
            </div>
        </div>
    </section>
)
}

export default Service