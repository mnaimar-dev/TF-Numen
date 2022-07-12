import "./App.css";
import Footer from "./componentes/footer/footer";
import Header from "./componentes/header/Header";
import Promotion from "./componentes/promotion/Promotion";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import ProductsList from "./screens/ProductsList";
import Contact from "./screens/Contact";
import Cart from "./screens/Cart";



function App() {

  const [contador, setContador] = useState(0)
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  function handleEliminarProducto(producto) {
    const nuevoCarrito = carrito.filter( product => product !== producto)

    Swal.fire({
      title: `¿Deseas eliminar ${producto.nombre} del carrito?`,
      text: "Esta acción es irreversible.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#35994D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([])
        setCarrito(nuevoCarrito)
        setContador(contador - 1)
        setTotal(total - producto.precio)
          Swal.fire(
          'Producto eliminado!',
          'El producto fue eliminado correctamente',
          'success'
        )
      }
    })
    

  }

  function finalizarCompra() {
    Swal.fire({
      title: `¿Deseas finalizar la compra?`,
      // text: "Esta acción es irreversible.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#35994D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, finalizar y pagar!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([])
        setTotal(0)
        setContador(0)
          Swal.fire(
          'Compra finalizada! 😃',
          'Tu compra se ha procesado correctamente. Pronto nos pondremos en contacto con vos para coordinar la entrega 🚀',
          'success'
        )
      }
    })
  }

  function handleEliminar() {
    Swal.fire({
      title: `¿Deseas vaciar el carrito?`,
      text: "Esta acción es irreversible.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#35994D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, vaciar!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([])
        setTotal(0)
        setContador(0)
          Swal.fire(
          'Vaciado!',
          'El carrito fue vaciado correctamente.',
          'success'
        )
      }
    })
  }

  function cambiarTotal(precio) {
    const monto = total + precio;
    setTotal(monto)
    console.log(total)
  }

  
  function handleClick(producto) {
    Swal.fire({
      title: `¿Deseas agregar ${producto.nombre} al carrito?`,
      // text: "Descripción",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#35994D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, agregar!'
    }).then((result) => {
      if (result.isConfirmed) {
          setContador(contador + 1);
          setCarrito([...carrito, producto])
          cambiarTotal(producto.precio)
          Swal.fire(
          'Agregado!',
          'El producto fue agregado correctamente.',
          'success'
        )
      }
    })
  }

  if(carrito.length > 0){
    carrito.forEach((e) => console.log(e))
  }

  return (
        <div className="App">
        <Router>
          <div>
            <Promotion /> 
            <Header
              contador = { contador }
            />
            <Routes>
              <Route exact path='/' element= { 
              <Home 
                contador = { contador } 
                setContador = { setContador } 
                handleClick = { handleClick }
                carrito = { carrito }
                setCarrito = { setCarrito }
                total = { total }
                setTotal = { setTotal }
              /> 
              }>
              </Route>
              <Route exact path='/products' element= { 
                <ProductsList 
                  handleClick = { handleClick }
                  carrito = { carrito }
                  setCarrito = { setCarrito }
                  total = { total }
                  setTotal = { setTotal }
                /> 
              }>
              </Route>
              <Route exact path='/contact' element= { <Contact /> }></Route>
              <Route exact path='/cart' element= { <Cart carrito = { carrito } setCarrito = { setCarrito } total = { total } setTotal = { setTotal } handleEliminar = { handleEliminar } finalizarCompra = { finalizarCompra } handleEliminarProducto = { handleEliminarProducto } /> }></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
        </div>
  );
}

export default App;
