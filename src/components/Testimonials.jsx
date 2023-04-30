import { Carousel } from '@mantine/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  return (
    <div>
      <Carousel
      className='mt-16'
      maw={1000}
      mx="auto"
      height={500}
      nextControlIcon={<FontAwesomeIcon icon={faChevronCircleRight} className='text-apporange text-4xl'/>}
      previousControlIcon={<FontAwesomeIcon icon={faChevronCircleLeft} className='text-apporange text-4xl'/>}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-16 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./foto-perfil.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> " Gracias al Estudio Jurídico Guaragna-Cortes, pude solucionar un problema de herencia que llevaba años sin resolverse. La profesionalidad y el compromiso de sus abogados me permitieron obtener la justicia que merecía." </p>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-16 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./foto-perfil.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "Después de sufrir un accidente de tránsito, recurrí al Estudio Jurídico Guaragna-Cortes y quedé muy satisfecho con los resultados. Sus abogados expertos en accidentes de tráfico me brindaron una atención personalizada y lograron que obtuviera la indemnización que merecía." </p>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-16 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./foto-perfil.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "En momentos de dificultades, contar con un equipo de abogados de derecho civil confiable y experimentado es fundamental. El Estudio Jurídico Guaragna-Cortes me brindó una atención personalizada y me asesoró de forma clara y eficaz en cada etapa del proceso legal." </p>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-16 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./foto-perfil.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "El Estudio Jurídico Guaragna-Cortes me asesoró en un divorcio complicado. Gracias a su experiencia en temas de custodia, manutención y visitas, logramos llegar a un acuerdo justo y equitativo para todas las partes." </p>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-16 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./foto-perfil.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "Cuando sufrí un accidente laboral, Estudio Jurídico Guaragna-Cortes me brindó el asesoramiento legal que necesitaba para defender mis derechos y obtener una compensación adecuada. Su conocimiento en derecho laboral fue clave para mi caso." </p>
      </Carousel.Slide>
    </Carousel>
    </div>
  )
}

export default Testimonials