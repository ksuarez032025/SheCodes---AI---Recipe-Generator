function recipeOutput(response) {
  console.log("Recipe Generated");

  new Typewriter("#recipe-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let requestInput = document.querySelector("#user-request");

  let apiKey = "c3650d7d0ad3c75tcafd67c27c4o8bd0";
  let prompt = `Generate a recipe from ${requestInput.value}`;
  let context =
    " Return a single easy-to-follow recipe using clean HTML. Use the following structure exactly: " +
    " The recipe name should be wrapped in a <h2 class='recipe-title'> tag." +
    " Directly underneath, include a <div class='meta-box'> that contains:" +
    " Servings, Prep Time, Cook Time, and Total Time. Make these bold" +
    " Each detail should be wrapped in a <p> tag, and the layout should work in two columns." +
    " Next, add a <h3> that says 'Ingredients:', followed by a <ul> with each ingredient in its own <li>. " +
    " Then add another <h3> that says 'Instructions:', followed by an <ol> with each step in a separate <li>. " +
    " Do not include any inline CSS or style tags. Do not include any additional text, explanations, or notes ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");

  axios.get(apiUrl).then(recipeOutput);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
