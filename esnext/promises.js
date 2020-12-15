// Promise
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Que legal")
  .then((frase) => frase.concat("?!?"))
  .then((outrafrase) => console.log(outrafrase))
  .catch((e) => console.log(e));

// files.cod3r.com.br/curso-js/turmA.json
// files.cod3r.com.br/curso-js/turmB.json
// files.cod3r.com.br/curso-js/turmC.json
