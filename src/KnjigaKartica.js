import React from "react";
import { useHistory } from "react-router";
import "./KnjigaKartica.css";

function KnjigaKartica({ knjiga }) {
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/${knjiga.id}`)} className="knjigaKartica">
      <img width={200} height={200} src={knjiga.slika} />
      <div className="informacije">
        <div className="ime"> {knjiga.ime}</div>
        <div className="pisac">{knjiga.pisac}</div>
        <div className="zanr">{knjiga.zanr}</div>
      </div>
    </div>
  );
}

export default KnjigaKartica;
