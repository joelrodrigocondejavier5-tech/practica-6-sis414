async function obtenerPokemon(nombre) {
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    if (!respuesta.ok) {
      throw new Error(`No encontrado (Error ${respuesta.status})`);
    }
    const datos = await respuesta.json();
    console.log("ID:", datos.id);
    console.log("Nombre:", datos.name);
    console.log("Altura:", datos.height);
    console.log("Peso:", datos.weight);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

obtenerPokemon("pikachu");