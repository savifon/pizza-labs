const pizzas = require("./pizzas.json");
const order = require("./order.json");

module.exports = () => ({
  pizzas: pizzas,
  order: order,
});
