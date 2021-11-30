document.querySelector(".busca").addEventListener("submit", (event) => {
  event.preventDefault();
  let placeInput = encodeURI(document.querySelector("#searchInput").value);
  getInfo(placeInput);
});

async function getInfo(place) {
  if (!!place) {
    showWarning("Carregando...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=pt_br&appid=394c610bc2de25f51db46c5e79ade7f4`;
    let results = await fetch(url).then(function (response) {
      return response.json();
    });

    if (results.cod === 200) {
      showInfo({
        name: results.name,
        country: results.sys.country,
        temp: results.main.temp,
        tempIcon: results.weather[0].icon,
        windSpeed: results.wind.speed,
        windAngle: results.wind.deg,
      });
    } else {
      clearInfo();
      showWarning("Não encontramos a sua localização");
    }
  }
}

function clearInfo() {
  showWarning("");
  document.querySelector(".resultado").style.display = "none";
}

function showInfo(json) {
  showWarning("");

  document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;
  document.querySelector(".tempInfo .text").innerHTML = json.temp;
  document.querySelector(".ventoInfo .text").innerHTML = json.windSpeed;
  document.querySelector(".ventoPonto").style.transform = `rotate(${
    json.windAngle - 90
  }deg)`;

  document
    .querySelector(".temp img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`
    );
  document.querySelector(".resultado").style.display = "block";
}

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
