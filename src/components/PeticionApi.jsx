import React, { useEffect } from "react";

const PeticionApi = () => {
  
  const traerAnimales = async () => {};
  const siguiente = () => { };
  const atras = () => {};

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
