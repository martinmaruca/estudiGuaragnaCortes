
const Header = () => {
  return (
    <section>
        <div className="flex w-full h-screen flex-col items-center justify-center bg-appblack">
            <h1 className="mb-16 text-8xl font-bebas font-bold uppercase text-appwhite">
                Especialistas  
            </h1>
            <h2 className="mb-16 text-4xl font-bold uppercase text-appwhite">
                en accidentes de trabajo y tránsito
            </h2>
            <button className="bg-apporange px-16 py-3 rounded-md font-roboto font-semibold mb-5">
                Solicite una cita
            </button>
        </div>
    </section>
  )
}

export default Header