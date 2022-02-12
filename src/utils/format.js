export const rounded = (value) => {
  return Math.floor(value * 100) / 100;
};

export const minutes = (ms) => {
  return Math.floor(ms / 60000).toFixed(0);
};

export const money = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
