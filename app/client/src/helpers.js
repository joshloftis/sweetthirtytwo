const formatPrice = value => `$${(value / 1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

module.exports = {
  formatPrice,
};

