function recipeOutputHandler(response) {
  console.log("Recipe Generated");

  new Typewriter("#generated-recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });

  document.querySelector(".recipe-output").classList.add("visible");
}

function generateRecipe(event) {
  event.preventDefault();

  let requestInput = document.querySelector("#user-request");
  let recipeOutput = document.querySelector("#generated-recipe");

  recipeOutput.innerHTML = "⏳ Cooking up your recipe...";

  let apiKey = "c3650d7d0ad3c75tcafd67c27c4o8bd0";
  let prompt = `Generate a recipe from ${requestInput.value}`;
  let context =
    " Return a single easy-to-follow recipe using clean HTML. Use the following structure exactly:" +
    " Wrap the entire recipe inside a <div id='generated-recipe'>." +
    " Inside that div, start with a <h2 class='recipe-title'> for the recipe name." +
    " Immediately below, include a <div class='meta-box'> that contains:" +
    " Servings, Prep Time, Cook Time, and Total Time. Make these bold — each inside its own <p> tag, and the layout should work in two columns." +
    " Then add a <h3> that says 'Ingredients:', followed by a <ul> with each ingredient in a <li>." +
    " After that, include another <h3> that says 'Instructions:', followed by an <ol> with each step in a <li>." +
    " Do not include any inline CSS or style tags. Do not include any additional text, explanations, or notes ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  requestInput.value = "";
  console.log("Generating Recipe");

  axios
    .get(apiUrl)
    .then(recipeOutputHandler)
    .catch(() => {
      recipeOutput.innerHTML =
        "❌ Oops! Something went wrong. Please try again.";
    });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
