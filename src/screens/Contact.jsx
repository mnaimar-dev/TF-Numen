import "./Contact.css"

const Contact = () => {
  return (
    <div className="divFormulario">
        <div className="container mb-5 text-white text-start">
            <h3 className="text-center text-uppercase py-4">Contacto</h3>
            <div className="contact-form-container shadow-lg p-4 rounded-3 formulario">
            <form className="w formulario_width">
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" required />
                </div> 
                <div className="mb-3">
                <label htmlFor="phone" className="form-label">Número</label>
                <input type="number" className="form-control" id="phone" required />
                </div> 
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div> 
                <div className="mb-3">
                <label htmlFor="timing" className="form-label">¿Cuándo podemos contactarte?</label>
                <select className="form-select" id="timing">
                    <option value="Any time" defaultValue>En cualquier horario</option>
                    <option value="Morning">Por la mañana</option>
                    <option value="Afternoon">Por la tarde</option>
                    <option value="Evening">Por la noche</option>
                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="query" className="form-label">Ingresa tu consulta</label>
                <textarea className="form-control" id="query" required></textarea>
                </div>
                <div className="d-grid">
                <button type="submit" className="btn btn-success bg-gradient">Enviar</button>
                </div>
            </form>
            </div>    
        </div>
    </div>
  )
}

export default Contact