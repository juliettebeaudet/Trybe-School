// A função getPlanet abaixo imprime o planeta Marte de forma síncrona.
// Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

// imprime Marte depois de 4 segundos
setTimeout(() => console.log(getPlanet()), 4000);
