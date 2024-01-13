const textbox = document.getElementById("textBox");
const toFarhrenite = document.getElementById("toFarhrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    const temperature = parseFloat(textbox.value);

    if (toFarhrenite.checked) {
        const convertedTemperature = (temperature * 9 / 5) + 32;
        result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°F`;
    } else if (toCelsius.checked) {
        const convertedTemperature = (temperature - 32) * 5 / 9;
        result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°C`;
    } else {
        result.textContent = "Select a unit";
    }
}
