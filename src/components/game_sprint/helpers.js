export const getRandomNumber = (max) =>
  Math.floor(Math.random() * Math.floor(max));

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);
