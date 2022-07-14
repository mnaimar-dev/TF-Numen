import "./Productos.css";
import "./fonts.css";
import data from "../../helpers/Data";
import dataOnSale from "../../helpers/DataNowOnSale"
// import Intel from "./components/intel";

function Productos({ handleClick }) {


  return (
    <section className="contenedor">
      <div className="titulo">
        Nuestros <span>Productos</span>
      </div>
      
      <div className="desktopWrapper">
        {data.map( (productos) => {
            if (productos.id < 5) {
              return (
                  <div key={ productos.id } className="Card productosDesktop">
                    <div className="card__body">
                      <img src= { productos.imagen }></img>
                      <h2 className="card__title">{ productos.nombre }</h2>
                      <h4 className="text-white pt-2">{ productos.precio }</h4>
                      <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci</p>
                      <button
                        onClick={ () => { handleClick(productos) } }
                        className="card__btn">Comprar</button>
                    </div>
                  </div>
              )
            }
          })}
      </div>

      <div className="mobileWrapper">
        {data.map( (productos) => {
            if (productos.id < 5) {
              return (
                  <div key={ Math.random() * (10 - 5) + 5 }  className='productosMobile card d-flex col-lg-4 col-md-4 col-sm-12 card1'>
                    <div className="card cardMobile">
                        <img 
                        src= { productos.imagen } 
                        className="card-img-topc d-flex imagenMobile" alt="..." />
                        <div className="card-body bg-black">
                            <h5 className="card-title text-white">{ productos.nombre }</h5>
                            <p className="card-text precio">{ `$${productos.precio}` }</p>
                            <div className='d-grid'>
                                <button 
                                    className='btn btn-danger py-1 botonEliminarProducto' 
                                    style={{maxHeight: '2rem', marginTop: '3rem', marginLeft: '1rem'}}
                                    onClick = { () => { handleClick(productos) }}
                                    >
                                        Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                  </div>
              )
            }
          })}
      </div>

      <div className="contenedor2">
        <h2 className="titulo2">
          Now on <span>Sale</span>
        </h2>

        <div className="wrapper2Desktop">
          {
            dataOnSale.map( (producto) => {
              return (
                <div key={ producto.id } className="Card2">
                  <div className="card__body2">
                    <img className="img2" src={producto.imagen}></img>
                    <h2 className="card__title2"> {producto.titulo}</h2>
                    <button className="card__btn2">Ver Detalles</button>
                  </div>
                </div>
              );
            } )
          }
        </div>

        <div className="wrapper2Mobile">
          {
            dataOnSale.map( (producto) => {
              return (
                <div key={ producto.id } className="card mb-3">
                  <img src= { producto.imagen } className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card__title2">{ producto.titulo }</h5>
                    <button className="card__btn2">Ver Detalles</button>
                  </div>
                </div>
              );
            } )
          }
        </div>
      </div>
    </section>
  );
}

export default Productos;
