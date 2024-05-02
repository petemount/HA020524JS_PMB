function temprechner(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(
    "Die Temperatur in " +
      celsius +
      " Grad beträgt in Fahrenheit " +
      fahrenheit +
      " Grad."
  );
}

temprechner(20);
