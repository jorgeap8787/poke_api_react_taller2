import React, { useEffect } from "react";

const PeticionApi = () => {
  const [animales, setAnimales] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(0);
  const [filasPorPagina, setFilasPorPagina] = React.useState(20);

  const traerAnimales = async () => {
    
  };

  const siguiente = () => {
    setPaginacion((paginacion) => {
      return paginacion + 1;
    });
  };

  const atras = () => {
    if (paginacion > 0) {
      setPaginacion((paginacion) => {
        return paginacion - 1;
      });
    }
  };

  

  return (
    <div>
      <h1>PETICION AL API DE POKEMON</h1>
      <button onClick={traerAnimales}> Traer Pokemones</button>
      <button onClick={atras}>Atrás</button>
      <button onClick={siguiente}>Siguiente</button>

      
    </div>
  );
};

export default PeticionApi;
