import Footer from "../componentes/footer/footer";
import "../componentes/productos/Productos.css";
import "./ProductsList.css"
import data from '../helpers/Data.js'

const ProductsList = ({ handleClick, total, setTotal }) => {

  return (
    <div className="bg-black main-div">
        <div className="tituloProductsList">
            Nuestros <span>Productos</span>
        </div>
        <div className='row rowDiv' style={{ width: '90vw', height: '70%', margin: 'auto' }}>
        {
            data.map((producto) => {
                return(
                        <div key={ producto.id }  className='col-lg-4 col-md-4 col-sm-12 card1 p-2 mb-3 mt-2'>
                            <div className="card cardModifier" style={{ widht: '5rem' }}>
                                <img 
                                src= { producto.imagen } 
                                className="card-img-topc d-flex" alt="..." />
                                <div className="card-body bg-black">
                                <h5 className="card-title text-white">{ producto.nombre }</h5>
                                <p className="card-text precio">{ `$${producto.precio}` }</p>
                                <div className='d-grid'>
                                    <a 
                                        href="#" 
                                        className="btn btn-danger"
                                        onClick = { () => handleClick(producto) }
                                        >
                                            Comprar
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                )
            })
        }
        </div>
        <Footer />
    </div>
  )
}

export default ProductsList

