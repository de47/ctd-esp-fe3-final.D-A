import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextGlobal } from "./utils/global.context";
import { IoHeart } from "react-icons/io5";
import { IoIosHeartDislike } from "react-icons/io";

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = (dentist) => {
     // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_DENTIST_FAV", dentist })
    toast.success(`Se añadió a ${name} a tus favoritos`)
  }

  const removeFav = (dentist) => {
    dispatch({ type: "REMOVE_DENTIST", dentist });
    toast.error(`Se eliminó a ${name} de tus favoritos`);
  };

  const isFav = state.favsDentists.find((dentist) => dentist.id === id);

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      {state.theme ? <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> : <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />}
      <Link to={`/detail/${id}`}>
        <div>
          <img src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
          <h4>{id} - {name}</h4>
          <h5>{username}</h5>
        </div>
      </Link>
      <div>
        {!isFav ? <button onClick={() => addFav({ id: id, name: name, username: username })} className="favButton" >Favoritos<IoHeart /></button> : <button onClick={() => removeFav({ id: id })} className="removeButton" >Quitar<IoIosHeartDislike /></button>}
      </div>
    </div>
  );
};

export default Card;
