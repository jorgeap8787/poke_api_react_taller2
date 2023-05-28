import React, { useEffect } from "react";

const PeticionApi = () => {
  const [animales, setAnimales] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(0);
  const [filasPorPagina, setFilasPorPagina] = React.useState(20);

  const traerAnimales = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${filasPorPagina}&offset=${
          paginacion * filasPorPagina
        }`
      );

      const data = await res.json();
      const pokemons = await Promise.all(
        data.results.map(async (e) => {
          const res = await fetch(e.url);
          return await res.json();
        })
      );
      setAnimales([...pokemons]);
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    traerAnimales();
  }, [paginacion]);

  return (
    <div>
      <h1>PETICION AL API DE POKEMON</h1>
      <button onClick={traerAnimales}> Traer Pokemones</button>
      <button onClick={atras}>Atrás</button>
      <button onClick={siguiente}>Siguiente</button>

      {animales.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {item.id} - {item.name} 
            </h4>
            <img src={item.sprites["front_default"]} alt={item.name} />
            
            
          </div>
        );
      })}
    </div>
  );
};



export default PeticionApi;
