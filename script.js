const form = document.getElementById("form");
const colorPicker = document.getElementById("seed-color");
const schemeMode = document.getElementById("scheme-mode");
const paletteContainer = document.getElementById("palette-container");

// Form Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const seedColor = colorPicker.value.substring(1);
  const mode = schemeMode.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&format=json&mode=${mode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors.map((color) => {
        return color.hex.value;
      });
      console.log(colors);
      displayPalette(colors);
    });

  console.log(`the seed color ${seedColor}, and the schemeMode is ${mode}`);
});

function displayPalette(colors) {
  paletteContainer.innerHTML = "";

  colors.forEach((color) => {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = color;
    div.innerHTML = `<span>${color}</span>`;

    paletteContainer.appendChild(div);
  });
}
