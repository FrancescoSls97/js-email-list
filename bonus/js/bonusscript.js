console.log("hello");
let listEl = document.querySelectorAll(".list-group-item");
const mailGenEl = document.getElementById("mail-generated");
const btnEl = document.getElementById("button");
const reGenEl = document.getElementById("regen");

// aggiungere evento al click
btnEl.addEventListener("click", function () {
  mailGenEl.classList.toggle("d-none");
  for (let i = 0; i < 10; i++) {
    // utilizzo di fetch per recuperare dati da un API
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((Response) => Response.json())
      .then((data) => {
        // lod del risultato
        console.log(data.response);
        listEl[i].innerText = data.response;
        reGenEl.innerText =
          "Servono altre mail? Premi di nuovo il bottone verde";
      });
  }
});
