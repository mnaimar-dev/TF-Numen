import React from "react";
import "./armado.css";
import armadoVideo from "../../media/armadoVideo.mp4";

const About = () => {
  return (
    <div className="armado-container">
      <div className="armado-desc">
        <h3 className="tituloArmado text-uppercase">Armamos y reparamos tu<span> pc</span></h3>
        <p className="textoArmado text-start">
        Contamos con los mejores y ultimos componentes de hardware de las mejores marcas al mejor 💲💲💲<span className="spanArmado">PRESUPUESTO</span>💲💲💲.
        </p>
        <a className="button mt-3" href="https://web.whatsapp.com/" target="_blanck"> <span>CONSULTANOS</span><i></i></a>
      </div>
      <div className="armado-video">
        <video className='armadoVideo'src={ armadoVideo } autoPlay loop muted />
      </div>
    </div>
  );
};

export default About;
