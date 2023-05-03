
const ActionCall = () => {
  return (
    <section className="overflow-hidden font-montserrat flex w-full h-screen flex-col items-center justify-center bg-appblack">
        <p className="mb-16 text-3xl sm:text-xl font-bold uppercase text-appwhite" data-aos="fade-right" data-aos-duration="3000">NO ESPERES MÁS</p>
        <h2 className="mb-16 text-6xl sm:text-2xl font-bold uppercase text-appwhite" data-aos="fade-left" data-aos-duration="3000">ENVIANOS UN MENSAJE</h2>
        <p className="mb-16 text-3xl sm:text-lg font-bold uppercase text-appwhite" data-aos="flip-up" data-aos-duration="3000">¿PREGUNTAS? HÁGANOSLO SABER.</p>
        <a href="https://wa.me/5492317418366?text="
        target="_blank"
        data-aos="flip-down"
        data-aos-duration="3000"
        rel="noreferrer" className="bg-apporange px-16 py-3 rounded-md font-semibold mb-5 hover:bg-appblack hover:text-appwhite border-2 border-solid border-transparent hover:border-apporange transition-all ">Contactenos ahora</a>
    </section>
  )
}

export default ActionCall