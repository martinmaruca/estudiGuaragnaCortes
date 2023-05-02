
const Header = () => {
  return (
    <section>
        <div className="flex w-full h-screen flex-col items-center justify-center bg-appblack">
            <h1 className="mb-16 text-8xl font-bebas font-bold uppercase text-appwhite" data-aos="zoom-in" data-aos-duration="3000">
                Especialistas  
            </h1>
            <h2 className="mb-16 text-4xl font-bold uppercase text-appwhite" data-aos="zoom-in-down" data-aos-duration="3000">
                en accidente Laboral y tránsito
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