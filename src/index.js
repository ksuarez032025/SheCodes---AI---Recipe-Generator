function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-output", {
    strings: "Recipe name will go here",
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
