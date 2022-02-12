export const rounded = (value) => {
  return Math.floor(value * 100) / 100;
};

export const minutes = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 60000).toFixed(0);

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const money = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
