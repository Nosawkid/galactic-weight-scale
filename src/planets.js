const EARTH_GRAVITY = 9.81;

const validateInput = (input) => {
  if (typeof input !== "number" || isNaN(input) || input < 0) {
    return null;
  }
  return true;
};

const weightOnMercury = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (3.7 / EARTH_GRAVITY)).toFixed(2));

const weightOnVenus = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (8.87 / EARTH_GRAVITY)).toFixed(2));

const weightOnEarth = (weight) =>
  validateInput(weight) === null ? null : Number(weight.toFixed(2));

const weightOnMars = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (3.71 / EARTH_GRAVITY)).toFixed(2));

const weightOnJupiter = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (24.79 / EARTH_GRAVITY)).toFixed(2));

const weightOnSaturn = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (10.44 / EARTH_GRAVITY)).toFixed(2));

const weightOnUranus = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (8.69 / EARTH_GRAVITY)).toFixed(2));

const weightOnNeptune = (weight) =>
  validateInput(weight) === null
    ? null
    : Number((weight * (11.15 / EARTH_GRAVITY)).toFixed(2));

module.exports = {
  weightOnMercury,
  weightOnVenus,
  weightOnEarth,
  weightOnMars,
  weightOnJupiter,
  weightOnSaturn,
  weightOnUranus,
  weightOnNeptune,
};
