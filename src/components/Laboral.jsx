import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Laboral = () => {
  return (
    <section className="w-full h-full bg-appwhite pt-5 pb-20">
      <div className="w-[90%] mx-auto px-4">
        <Link to="/" >
        <FontAwesomeIcon icon={faChevronLeft} className='text-apporange text-4xl mt-5 hover:text-6xl transform animate-bounce transition-all'/>
        </Link>
        <h2 className="font-montserrat font-bold text-3xl my-16">Accidente laboral - ART</h2>
        <div className="font-montserrat tracking-wider leading-10 text-2xl sm:text-xl mb-16">
            <h3 className='font-semibold text-2xl pb-8'>Denuncia de Accidente</h3>
            <p>
                El empleador está obligado a denunciar a la Aseguradora, todo accidente de trabajo o enfermedad profesional que sufran sus trabajadores, también podrá efectuar la denuncia el propio trabajador, sus derechohabientes o cualquier persona que haya tenido conocimiento del accidente de trabajo o enfermedad profesional.
                prestaciones Médicas.
            </p>
            <p className="mb-5">La ART tiene la obligación de brindar, en caso de contingencias previstas por la ley, las siguientes prestaciones en Especie:</p>
            <ul className="mb-5">
                <li><span className="text-apporange text-5xl mr-2">•</span>Asistencia médica y farmacéutica.</li>
                <li><span className="text-apporange text-5xl mr-2">•</span>Prótesis y ortopedia.</li>
                <li><span className="text-apporange text-5xl mr-2">•</span>Rehabilitación.</li>
                <li><span className="text-apporange text-5xl mr-2">•</span>Recalificación personal.</li>
            </ul>
            <h3 className="font-semibold text-2xl py-8">Alta</h3>
            <p> El alta debe ser otorgada por escrito y notificada al trabajador.<br />
            Al ser otorgada el alta el trabajador deberá presentarse ante su empleador para reiniciar la actividad laboral.<br />
            Una ves otorgada la misma , se esta en condiciones de realizar el reclamo indemnizatorio por intermendio de su abogado de confianza.</p>
            <h3 className="font-semibold text-2xl py-8">Porcentaje de Incapacidad</h3>
            <p> En caso de que existiera una secuela producto del accidente, el porcentaje de incapacidad será estimado y notificado por la ART luego del alta laboral o al cumplirse el año del accidente (lo que ocurriese primero).<br /> <br />
            El trabajador podrá aceptar el porcentaje otorgado por la ART o rechazarlo.<br />
            En el caso de que la proporción sea aceptada, se podrá firmar un acuerdo, que luego será homologado por la Oficina de Homologaciones y Visado, la Comisión Médica u organismos habilitados. <br />
            Si no se hubiera acordado, se esta en condiciones de  iniciar el reclamo administrativo  ante la Comisión médica más cercana a su domicilio. <br /> <br />
            ¡Recuerde de ser posible, no dude en consultar con un abogado, así lo asesora de la mejor manera, y recuerde que su consulta no nos molesta.!!! <br />
            Haga valer su derecho, reciba una correcta indemnizacion.</p>
        </div>
      </div>
    </section>
  )
}

export default Laboral