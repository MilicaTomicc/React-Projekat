import React from "react";
import { useRouteMatch } from "react-router";
import "./Knjiga.css";

function Knjiga({ nadjiKnjiguPoId }) {
  const match = useRouteMatch();

  const podaci = nadjiKnjiguPoId(match.params?.id);

  return (
    <div className="knjiga">
      <div className="naslovKnjige">{podaci.ime}</div>

      <div className="slikaIDetalji">
        <img src={podaci.slika} />
        <div className="detalji">
          <div className="pisac">{podaci.pisac}</div>
          <div>{podaci.zanr}</div>
          <div className="opis">{podaci.opis}</div>
        </div>
      </div>
    </div>
  );
}

export default Knjiga;
