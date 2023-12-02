import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";
import { BsMoonStarsFill,BsHouseDoor } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";


const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  const cambiarTema = (theme) => {
    dispatch({ type: 'CAMBIAR_TEMA', theme });
  };

  return (
    <nav>
      <ul>
        <li><Link to="/home" >Inicio<BsHouseDoor /></Link></li>
        <li><Link to="/favs">Favoritos<CiStar /></Link></li>
        <li><Link to="/contact">Contactanos<PiPhone /></Link></li>
      </ul>
      <button onClick={() => cambiarTema(!state.theme)}>{state.theme ? <BsMoonStarsFill/>:<LuSunMoon />}</button>
    </nav>
  )
}

export default Navbar