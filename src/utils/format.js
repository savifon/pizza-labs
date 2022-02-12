export const rounded = (value) => {
  return Math.floor(value * 100) / 100;
};

export const formatMinutes = (ms) => {
  return Math.floor(ms / 60000).toFixed(0);
};

export const formatPrice = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    year: "numeric",
    month: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
};
