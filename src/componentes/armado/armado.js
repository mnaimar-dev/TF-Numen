import React from "react";
import "./armado.css";
import armadoVideo from "../../media/armadoVideo.mp4";

const About = () => {
  return (
    <div className="armado-container">
      <div className="armado-desc">
        <h3>ARMAMOS Y REPARAMOS TU <span>PC</span></h3>
        <p>
        Contamos con los mejores y ultimos componentes de hardware de las mejores marcas al mejor 💲💲💲<span>PRESUPUESTO</span>💲💲💲.
        </p>
        <a className="button" href="https://web.whatsapp.com/" target="_blanck"> <span>CONSULTANOS</span><i></i></a>
      </div>
      <div className="armado-video">
      <video className='armadoVideo'src={armadoVideo} autoPlay loop muted />
      </div>
    </div>
  );
};

export default About;
