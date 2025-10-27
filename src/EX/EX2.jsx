//Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

export default function RecipeList() {
  return (
    <ul>
      {recipes.map((recipe)=>{
        return<li key={recipe.id}>
         <h2>{recipe.name}</h2>
         <ul>
         {recipe.ingredients.map((ingredient)=>
            <li>{ingredient}</li>)}
         </ul>
        </li>
      })}
    </ul>
  );
}