const form = document.getElementById("form");
const colorPicker = document.getElementById("seed-color");
const schemeMode = document.getElementById("scheme-mode");
const paletteContainer = document.getElementById("palette-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const seedColor = colorPicker.value.substring(1);
  const mode = schemeMode.value;

  //   try{
  //     const response = await
  //   }

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&format=json&mode=${mode}&count=6`
  )
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors;
      const color = colors.map((color) => {
        return `
        <p>${color.hex.value} </p>
        `;
      });

      console.log(color);
    });

  console.log(`the seed color ${seedColor}, and the schemeMode is ${mode}`);
});
