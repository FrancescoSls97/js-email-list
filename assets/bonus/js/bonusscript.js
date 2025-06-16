console.log("hello");

// selezione elementi della DOM
const btnEl = document.getElementById("button");
const listEl = document.getElementById("list");

//creazione evento per il click

btnEl.addEventListener("click", function () {
  console.log("Hai cliccato");
  // utilizzo di fetch per recuperare dati da un API
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((Response) => Response.json())
      .then((data) => {
        // lod del risultato
        console.log(data.response);
        /* document.writeln(data.response); */
        const listEl = document.getElementById("list");
      });
  }
});
