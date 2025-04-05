const button = document.getElementById("get-recipe");  // Get the button element
const container = document.getElementById("recipe-container");  // Get the container to show the recipe

button.addEventListener("click", function() {  // When the button is clicked
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")  // Get a random recipe from the API
    .then(function(response) {
      return response.json();  // Convert the response to JSON format
    })
    .then(function(data) {
      const meal = data.meals[0];  // Grab the first meal from the API response
      container.innerHTML = "<h2>" + meal.strMeal + "</h2>" +  // Display the meal name
        "<img src='" + meal.strMealThumb + "' alt='" + meal.strMeal + "'>" +  // Display the image
        "<p><strong>Category:</strong> " + meal.strCategory + "</p>" +  // Display the category
        "<p><strong>Instructions:</strong> " + meal.strInstructions.substring(0, 300) + "...</p>";  // Display the instructions
    });
});

