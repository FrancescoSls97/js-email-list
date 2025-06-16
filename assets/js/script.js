console.log("hello");

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  });
