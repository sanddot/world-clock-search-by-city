function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTimeData = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTimeData.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTimeData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTimeData = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTimeData.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTimeData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format(
    "A"
  )}</small>
      </div>
   </div>
 `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
