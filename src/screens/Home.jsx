import Armado from "../componentes/armado/armado";
import Banner from "../componentes/banner/Banner"
import Instagram from "../componentes/instagram/insta";
import Productos from "../componentes/productos/Productos"
import Section from "../componentes/section/section";
import Slider from "../componentes/slider/slider";

const Home = ({ contador, setContador, handleClick, total, setTotal }) => {

  return (
    <div>
        <Banner />
        <Productos
            contador = { contador }
            setContador = { setContador }
            handleClick = { handleClick }
            total = { total }
            setTotal = { setTotal }
        />
        <Armado />
        <Section />
        <Instagram />
        <Slider />
    </div>
  )
}

export default Home