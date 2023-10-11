import { Button } from "antd";
import { Link } from "react-router-dom";

const Prueba = () => {
  return (
    <>
      <div>hola</div>
      <Link to="/home">
        <Button className="buttom2">
            Regresar a Home
        </Button>
      </Link>
    </>
  );
};

export default Prueba;
