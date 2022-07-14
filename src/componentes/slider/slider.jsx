import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./slider.css";

const slider = () => {
  return (
    <div className='back'>
      <Carousel className='conteiner'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7915281/pexels-photo-7915281.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hardzone.es/app/uploads-hardzone.es/2020/05/AORUS-RGB-Portada.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/01/project-sophia-razer.jpeg?fit=1920%2C1080&ssl=1"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://liukin.es/wp-content/uploads/2021/08/El-error-de-Razer-te-permite-convertirte-en-administrador-de.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.irrompibles.net/irrwp/wp-content/uploads/2022/01/hx-ces-2022-group-shot-1920x1170-1.jpg"
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default slider