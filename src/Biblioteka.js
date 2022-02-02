import React from "react";
import "./Biblioteka.css";
import KnjigaKartica from "./KnjigaKartica";

function Biblioteka({ knjige }) {
  return (
    <>
      <div className="naslov">Bibloteka grada Beograda</div>
      <div className="biblioteka">
        {knjige.map((knjiga) => (
          <KnjigaKartica knjiga={knjiga} />
        ))}
      </div>
    </>
  );
}

export default Biblioteka;
