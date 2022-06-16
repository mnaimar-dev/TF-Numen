import React from 'react'
import "./section.css"

function section() {
  return (
   <div className='section-body'>
    <section className='section-container'>
    <div className='section-box1'>
    <i class="fa-solid fa-truck"></i>
        <h4>Entrega Gratis</h4>
        <p>Por compras superiores a $10000. Nos enfocamos en el público gamer brindando la última tecnología a través de insumos y equipos de última generación, las marcas más reconocidas y confiables</p>

        </div>
    
    <div className='section-box2'>
    <i class="fa-solid fa-money-bill-1-wave"></i>
        <h4>Métodos de pago seguros</h4>
        <p>Los medios de pago disponibles son efectivo, tarjeta de crédito, tarjeta de débito, transferencias, mercado pago, incluso cuotas sin interés. Para tu tranquilidad, todos nuestros productos cuentan con garantía de hasta 3 años.</p>

        </div>
    



    <div className='section-box3'>
        <i class="fa-solid fa-gift"></i>
        <h4>Canjea puntos por recompensas</h4>
        <p>Comprando en línea ganas puntos para tus recompensas. Síguenos en nuestras redes para obtener cupones de descuento e información de nuestros productos.</p>

        </div>
    




    </section>

   </div>
  )
}

export default section