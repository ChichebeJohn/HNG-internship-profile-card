function updateTime() {
  const currentTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
  const now = new Date();

  const utcTime = now.toUTCString();
  
  const localTime = now.toLocaleString();
  currentTimeElement.innerHTML = `UTC: ${utcTime} <br> Local:${localTime}`;
}

updateTime();

setInterval(updateTime, 1000);