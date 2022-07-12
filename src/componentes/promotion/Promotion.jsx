import { useState } from "react"
import './Promotion.css'


const Promotion = () => {
    const [promotion, setPromotion] = useState(true)

    function desactivar() {
      setPromotion(false)
    }

  return (

    <>
      { promotion ? 

        <div className="promotion">
          <p 
          className="promotion_text">
            Envíos gratis a partir de $3000. Regalo con compra superior a $1500
            <button
              onClick = { desactivar  }
              className="promotion_button">X</button> 
          </p>
        </div>
      
      : '' } 
    </>
  )
}

export default Promotion