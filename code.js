window.addEventListener("load", () => {
  let redRange = document.querySelector("#r-vermelho");
  let greenRange = document.querySelector("#g-verde");
  let blueRange = document.querySelector("#b-azul");

  redRange.addEventListener("input", getValue);
  greenRange.addEventListener("input", getValue);
  blueRange.addEventListener("input", getValue);

  function getValue(e) {
    let boxValueRed = document.querySelector("#box-valueR");
    let boxValueGreen = document.querySelector("#box-valueG");
    let boxValueBlue = document.querySelector("#box-valueB");
    let valorAlterado = e.target.value;

    if (e.target.id === "r-vermelho") {
      boxValueRed.value = valorAlterado;
    } else if (e.target.id === "g-verde") {
      boxValueGreen.value = valorAlterado;
    } else {
      boxValueBlue.value = valorAlterado;
    }

    let boxColor = document.querySelector("#box-color");
    boxColor.style.backgroundColor = `rgb(${boxValueRed.value},${boxValueGreen.value},${boxValueBlue.value})`;
  }
});
