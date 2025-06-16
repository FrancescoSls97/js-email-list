console.log("hello");
let listEl = document.querySelectorAll(".list-group-item");

// utilizzo di fetch per recuperare dati da un API
for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((Response) => Response.json())
    .then((data) => {
      // lod del risultato
      console.log(data.response);
      listEl[i].innerText = data.response;
    });
}
