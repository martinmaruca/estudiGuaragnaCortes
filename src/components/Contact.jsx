
const Contact = () => {
  return (
    <section>
        <div>
            <h2>CONTÁCTENOS</h2>
            <p>Cavallar N° 1487 - 9 de Julio - Argentina</p>
            <p>2317-418366</p>
            <p>estudiocortesguaragna@gmail.com</p>
        </div>
        <form>
            <input type="text" placeholder="Nombre"/>
            <input type="email" placeholder="Email"/>
            <input type="phone" placeholder="Teléfono"/>
            <input type="text" placeholder="Dirección"/>
            <input type="text" placeholder="Asunto"/>
            <textarea name="mensaje" id="" cols="30" rows="10">Mensaje</textarea>
        </form>
        <button>Enviar</button>
    </section>
  )
}

export default Contact