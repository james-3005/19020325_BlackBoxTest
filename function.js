const getShip = (s) => {
  if (s >= 50) return 50000;
  if (s >= 10 && s < 50) return 20000;
  return 0;
};
const totalPayment = (p, s) => {
  if( p <= 0 || s <= 0) return "Input not valid";
  const ship = getShip(s);
  if (p >= 300000) {
    return p;
  }
  if (p >= 200000 && p < 300000) {
    return p + ship * 0.2;
  }
  if (p >= 100000 && p < 200000) {
    return p + ship * 0.5;
  }
  return p + ship;
};

module.exports= {getShip, totalPayment}
