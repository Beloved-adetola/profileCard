function updateTime() {
    document.getElementById("time").textContent = new Date().toUTCString();
}
updateTime();
setInterval(updateTime, 60000);