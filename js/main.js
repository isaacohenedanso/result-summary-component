let categories = document.querySelectorAll(".category");
let scores = document.querySelectorAll(".score");
let icons = document.querySelectorAll(".icon");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 4; i++) {
      categories[i].textContent += data[i]["category"];
      scores[i].textContent +=  data[i]["score"];
      icons[i].setAttribute("src",data[i]["icon"]);
    }
    console.log(data);
  })
  .catch((err) => console.log(err));
