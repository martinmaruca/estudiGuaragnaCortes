
const Header = () => {
  return (
    <section>
        <div className="flex w-full h-screen flex-col items-center justify-center bg-appblack">
            <h2 className="mb-16 text-5xl sm:text-2xl  font-bold uppercase text-appwhite" data-aos="zoom-in-down" data-aos-duration="3000">
                Abogados
            </h2>
            <h1 className="mb-16 text-8xl sm:text-6xl font-bebas font-bold uppercase text-appwhite" data-aos="zoom-in" data-aos-duration="3000">
                Especialistas  
            </h1>
            <h2 className="mb-16 text-4xl sm:text-sm  font-bold uppercase text-appwhite" data-aos="fade-right" data-aos-duration="3000">
                en accidentes de tránsito y de trabajo 
            </h2>
            <a href="https://wa.me/5492317418366?text="
            target="_blank"
            data-aos="fade-up"
            data-aos-duration="3000"
            rel="noreferrer"
            className="bg-apporange px-16 py-3 rounded-md font-roboto font-semibold mb-5 hover:bg-appblack hover:text-appwhite border-2 border-solid border-transparent hover:border-apporange transition-all">
                Solicite una cita
            </a>
        </div>
    </section>
  )
}

export default Header