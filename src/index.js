function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTimeData = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTimeData.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTimeData.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTimeData = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoTimeData.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTimeData.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
