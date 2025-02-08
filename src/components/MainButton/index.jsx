import { NavLink } from "react-router-dom";

const MainButton = ({ name, page }) => { // Cambiado a una sola desestructuración
  return (
    <li>
      <NavLink
        to={page} // Se espera que 'page' sea una ruta como "/Nosotros"
        className="relative text-lg text-white group"
      >
        {name}
        <span
          className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#61CE70] transition-all duration-300 group-hover:w-full"
        ></span>
      </NavLink>
    </li>
  );
};

export default MainButton;
