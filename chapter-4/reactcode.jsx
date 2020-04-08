const dish = React.createElement("h1", null, "Baked Tofu");
const instructions = React.createElement("h2", null, "Instructions");
const ingredientsHeader = React.createElement("h2", null, "Ingredients");
const items = [
  "2 lb salmon",
  "5 sprigs fresh rosemary",
  "2 tablespoons olive oil",
  "2 small lemons",
  "1 teaspoon kosher salt",
  "4 cloves of chopped garlic"
];

//ingredients = React.createElement("ul", {className: "Ingredients"}, items.map((ingredient, i) => React.createElement("li", {key: i}, ingredient)))
//console.log(ingredients);
//ReactDOM.render([dish, ingredientsHeader, ingredients, instructions], document.getElementById("root"));

function IngredientsList({items}) {
  return React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) => React.createElement("li", {key: i}, ingredient)))
}

//console.log(IngredientsList(items));

ReactDOM.render(
  [dish, ingredientsHeader, React.createElement(IngredientsList, { items  } , null)],
  document.getElementById("root")
);