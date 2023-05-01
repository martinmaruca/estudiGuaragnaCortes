import { Carousel } from '@mantine/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  return (
    <div>
      <h1 className='font-montserrat font-semibold text-center text-4xl my-16'>Que opinan de nosotros?</h1>
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
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-20 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./sofia.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> " Gracias al Estudio Jurídico Guaragna-Cortes, pude solucionar un problema de herencia que llevaba años sin resolverse. La profesionalidad y el compromiso de sus abogados me permitieron obtener la justicia que merecía." </p>
        <span className='w-[90%] text-right text-apporange mt-3'>Sofía Fernández.</span>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-20 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./mateo.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "Después de sufrir un accidente de tránsito, recurrí al Estudio Jurídico Guaragna-Cortes y quedé muy satisfecho con los resultados. Sus abogados expertos en accidentes de tráfico me brindaron una atención personalizada y lograron que obtuviera la indemnización que merecía." </p>
        <span className='w-[90%] text-right text-apporange mt-3'>Mateo Ramírez.</span>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-20 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./valentina.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "En momentos de dificultades, contar con un equipo de abogados de derecho civil confiable y experimentado es fundamental. El Estudio Jurídico Guaragna-Cortes me brindó una atención personalizada y me asesoró de forma clara y eficaz en cada etapa del proceso legal." </p>
        <span className='w-[90%] text-right text-apporange mt-3'>Valentina Acosta.</span>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-20 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./tomas.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "El Estudio Jurídico Guaragna-Cortes me asesoró en un divorcio complicado. Gracias a su experiencia en temas de custodia, manutención y visitas, logramos llegar a un acuerdo justo y equitativo para todas las partes." </p>
        <span className='w-[90%] text-right text-apporange mt-3'>Tomás Romero.</span>
      </Carousel.Slide>
      <Carousel.Slide className='w-full h-max flex flex-col items-center justify-center font-montserrat px-20 text-lg '>
        <span>
          <img className='w-32 h-32 rounded-lg ' src="./luciana.png" alt="foto cliente" />
        </span>
        <p className='mt-16 text-center'> "Cuando sufrí un accidente laboral, Estudio Jurídico Guaragna-Cortes me brindó el asesoramiento legal que necesitaba para defender mis derechos y obtener una compensación adecuada. Su conocimiento en derecho laboral fue clave para mi caso." </p>
        <span className='w-[90%] text-right text-apporange mt-3'>Luciana Díaz.</span>
      </Carousel.Slide>
    </Carousel>
    </div>
  )
}

export default Testimonials