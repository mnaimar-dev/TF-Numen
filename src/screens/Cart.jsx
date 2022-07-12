import './Cart.css'

const Cart = ({ carrito, total, handleEliminar, finalizarCompra, handleEliminarProducto }) => {
  return (
    <div className='cartDiv1'>
        { carrito.length > 0 ?  
        <>
            <div className="tituloProductsList">
                Resumen <span>de Compra</span>
            </div>
            <div className='row container-fluid' style={{ width: '100vw', height: '70%', margin: 'auto' }}>
                {
                    carrito.map((producto, index ) => {
                        return(
                            <>
                                <div key={ producto.id }  className='carrito_rowCard col-lg-12 col-md-12 col-sm-12 card1 p-2 mb-3 mt-2'>
                                    <div className="card carrito_carta mb-3">
                                        <div className="row">
                                            <div className="col-md-4 carrito_divImagen">
                                                <img src= { producto.imagen } className="img-fluid imagenCarrito rounded-start mt-2" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body carrito_body">
                                                    <h5 className="card-title carrito_titulo text-white text-uppercase"> { producto.nombre } </h5>
                                                    <p className="card-text text-white carrito_precio">{ `$${producto.precio}` } </p>
                                                    <button 
                                                        className='btn btn-danger py-1 botonEliminarProducto' 
                                                        style={{maxHeight: '2rem', marginTop: '3.3rem'}}
                                                        onClick = { () => { handleEliminarProducto(producto) } }
                                                        >
                                                            Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div key={ Math.random() }  className=' resumenCarritoMobile col-lg-4 col-md-4 col-sm-12 card1 p-2 mb-3 mt-2'>
                                    <div className="card cardModifier" style={{ widht: '5rem' }}>
                                        <img 
                                        src= { producto.imagen } 
                                        className="card-img-topc d-flex" alt="..." />
                                        <div className="card-body bg-black">
                                            <h5 className="card-title text-white">{ producto.nombre }</h5>
                                            <p className="card-text precio">{ `$${producto.precio}` }</p>
                                            <div className='d-grid'>
                                                <button 
                                                    className='btn btn-danger py-1 botonEliminarProducto' 
                                                    style={{maxHeight: '2rem', marginTop: '3rem', marginLeft: '1rem'}}
                                                    onClick = { () => { handleEliminarProducto(producto) } }
                                                    >
                                                        Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='text-white pb-3 text-uppercase d-flex justify-content-center py-2 totalAPagar'>
                <p className='fs-3 ms-5'>{`Total a pagar: `}</p> <span className='fs-3 text-success'>{`$${total}`}</span>
            </div>
            <div className='pb-5 d-flex gap-4 justify-content-center px-3'>
                <button 
                    className='btn btn-success' 
                    style={{width: '20rem'}}
                    onClick = { finalizarCompra } 
                    >
                        Finalizar la Compra
                    </button>
                <button 
                    className='btn btn-danger' 
                    onClick = { handleEliminar }
                    style={{width: '20rem'}}
                    >
                        Vaciar el Carrito
                </button>
            </div>
        </>

    : 
    <div className="tituloProductsList divCarritoVacio">
        Carrito <span>Vacio</span>
    </div>
} 
    </div>
)
}

export default Cart