import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const {state , dispatch} = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="container">
        <button className="clear-button" onClick={() => dispatch({type:'REMOVE_ALL_DENTIST'})}>Borrar Todo</button>
      </div>
      <div className="card-grid">
        {state.favsDentists.map((s)  => (
          <Card key={s.id} name={s.name} username={s.username} id={s.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
