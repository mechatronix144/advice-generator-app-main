const imageBtn = document.getElementById("button-image");
const quoteWord = document.getElementById("quote");
const adviceHeading = document.getElementById("advice-heading");

imageBtn.addEventListener("click", function () {
  let url = `https://api.adviceslip.com/advice`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      adviceHeading.textContent = `ADVICE #${data.slip.id}`;
      quoteWord.textContent = `" ${data.slip.advice} "`;
    });

 
});
