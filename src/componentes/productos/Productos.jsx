import "./Productos.css";
import "./fonts.css";
import data from "../../helpers/Data";
// import Intel from "./components/intel";

function Productos({ handleClick, total, setTotal }) {


  return (
    <section className="contenedor">
      <div className="titulo">
        Nuestros <span>Productos</span>
      </div>
      <div className="wrapper">

        <div className="Card">
          <div className="card__body">
            <img src="https://i.pinimg.com/originals/16/54/5a/16545a5a313e60785f0bd4973fc6b8aa.jpg"></img>
            <h2 className="card__title">{ data[0].nombre }</h2>
            <h4 className="text-white pt-2">{ data[0].precio }</h4>
            <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci</p>
            <button
              onClick={ () => { handleClick(data[0]) } }
              className="card__btn">Comprar</button>
          </div>
        </div>

        {/* <Carta
          img="https://i.pinimg.com/originals/16/54/5a/16545a5a313e60785f0bd4973fc6b8aa.jpg"
          title="Luces Led"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci"
        /> */}

        <div className="Card">
          <div className="card__body">
            <img src="https://media.wired.com/photos/60fb269b6c21a8379e7e15fc/master/w_2560%2Cc_limit/Gear-Secretlab-Titan-Evo-2022.jpg"></img>
            <h2 className="card__title">{ data[1].nombre }</h2>
            <h4 className="text-white pt-2">{ data[1].precio }</h4>
            <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci</p>
            <button
              onClick={ () => { handleClick(data[1]) } }
              className="card__btn">Comprar</button>
          </div>
        </div>

        {/* <Carta
          img="https://media.wired.com/photos/60fb269b6c21a8379e7e15fc/master/w_2560%2Cc_limit/Gear-Secretlab-Titan-Evo-2022.jpg"
          title="Sillas gamer"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci"
        /> */}

        <div className="Card">
          <div className="card__body">
            <img src="https://www.pulsovideojuegos.com/wp-content/uploads/2019/12/mousepad-gaming-asus-rog-sheath.jpg"></img>
            <h2 className="card__title">{ data[2].nombre }</h2>
            <h4 className="text-white pt-2">{ data[2].precio }</h4>
            <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci</p>
            <button
              onClick={ () => { handleClick(data[2]) }}
              className="card__btn">Comprar</button>
          </div>
        </div>

        {/* <Carta
          img="https://www.pulsovideojuegos.com/wp-content/uploads/2019/12/mousepad-gaming-asus-rog-sheath.jpg"
          title="Mouse Pads"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci"
        /> */}

        <div className="Card">
          <div className="card__body">
            <img src="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Untitled466619.png"></img>
            <h2 className="card__title">{ data[3].nombre }</h2>
            <h4 className="text-white pt-2">{ data[3].precio }</h4>
            <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci</p>
            <button
              onClick={ () => { handleClick(data[3]) } }
              className="card__btn">Comprar</button>
          </div>
        </div>

        {/* <Carta
          img="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Untitled466619.png"
          title="Consolas"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta, quod sapiente quia adipisci"
        /> */}
      </div>

      <div className="contenedor2">
        <h2 className="titulo2">
          Now on <span>Sale</span>
        </h2>
        <div className="wrapper2">
          <Carta2
            img="https://101db.com.ar/8122-large_default/teclado-gamer-mecanico-usb-targa-tg-k250m-led-60-mill-clics.jpg"
            title="Teclado Gamer"
          />
          <Carta2
            img="https://noblex.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/h/p/hp600gm_iafbsm0000.jpg"
            title="Auriculares Gamer"
          />
          <Carta2
            img="https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg"
            title="Xbox X-01"
          />
          <Carta2
            img="https://m.media-amazon.com/images/I/41F8roqJdjS._SL500_.jpg"
            title="Ventilador StarTech"
          />
        </div>
      </div>
      {/* <Intel /> */}
    </section>
  );
}

export default Productos;

// export function Carta(props) {
//   return (
//     <div className="Card">
//       <div className="card__body">
//         <img src={props.img}></img>
//         <h2 className="card__title"> {props.title}</h2>
//         <p className="card__description">{props.description}</p>
//         <button
//           // onClick={  }
//           className="card__btn">Comprar</button>
//       </div>
//     </div>
//   );
// }

function Carta2(props) {
  return (
    <div className="Card2">
      <div className="card__body2">
        <img className="img2" src={props.img}></img>
        <h2 className="card__title2"> {props.title}</h2>
        <p className="card__description2">{props.description}</p>
        <button className="card__btn2">Ver Detalles</button>
      </div>
    </div>
  );
}
