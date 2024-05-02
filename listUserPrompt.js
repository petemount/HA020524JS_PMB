let liste2 = [];

// 5 Eingaben vom User einfordern:
function listenausgabe() {
  for (let i = 0; i < 5; i++) {
    // console.log("Hier ist die Fruchtauswahl: " + liste[i]);
    liste2.push(prompt("Eingabe bitte: "));
  }
}

listenausgabe();

// Liste untereinander listen:
for (x of liste2) {
  console.log(x);
}
