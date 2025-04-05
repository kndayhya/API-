const button = document.getElementById("get-recipe");  // Get the button element
const container = document.getElementById("recipe-container");  // Get  container to show  recipe

button.addEventListener("click", function() {  //
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")  // Get random recipe from API
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const meal = data.meals[0];  // Grab first meal from API response
      container.innerHTML = "<h2>" + meal.strMeal + "</h2>" +  // Display meal name
        "<img src='" + meal.strMealThumb + "' alt='" + meal.strMeal + "'>" +  // Display image
        "<p><b>Category:</b> " + meal.strCategory + "</p>" +  // Display category
        "<p><b>Instructions:</b> " + meal.strInstructions + "...</p>";  // Display instructions
    });
});

