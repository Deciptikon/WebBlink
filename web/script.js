const ledSwitch = document.getElementById("ledSwitch");

const ESP32_IP = "http://<ESP_IP>";

ledSwitch.addEventListener("change", () => {
  const state = ledSwitch.checked ? "on" : "off";
  fetch(`${ESP32_IP}/led/${state}`)
    .then((response) => {
      if (response.ok) {
        console.log(`LED is now ${state}`);
      } else {
        console.error(`Failed to change LED state: ${response.statusText}`);
      }
    })
    .catch((err) => {
      console.error("Error communicating with ESP32:", err);
    });
});
