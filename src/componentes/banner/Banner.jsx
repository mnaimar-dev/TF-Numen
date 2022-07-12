import { Carousel } from 'react-bootstrap'
import "./Banner.css"
import msi from "./img/banner-msi.png"
import asus from "./img/banner-asus.jpg"

function Banner() {
  return (

    <div className='back'>
      <Carousel className='container1'>
        <Carousel.Item className='item'>
          <img
            className="item_img"
            src= { msi }
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item className='item'>
          <img
            className="item_img"
            src= { asus }
            alt="Fourth slide"
          />

        
        </Carousel.Item>
        {/* <Carousel.Item className='item'>
          <img
            className="item_img"
            src="https://www.irrompibles.net/irrwp/wp-content/uploads/2022/01/hx-ces-2022-group-shot-1920x1170-1.jpg"
            alt="Seventh slide"
          />

        
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}

export default Banner