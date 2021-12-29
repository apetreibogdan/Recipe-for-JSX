import './App.css';
import perfectionSaladImg from './images/perfection_salad.jpg';
import React from "react";
import Highlighter from "react-highlight-words";

function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2"
    },
    {
      name: "cup sugar",
      quantity: "1/2"
    },
    {
      name: "teaspoon salt",
      quantity: "1"
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1"
    },
    {
      name: " cup lemon juice",
      quantity: "1/2"
    },
    {
      name: "tablespoons vinegar",
      quantity: "2"
    },
    {
      name: "cup shredded carrot",
      quantity: "1"
    },
    {
      name: "cup sliced celery",
      quantity: "1"
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1"
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2"
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1"
    }
  ]
// function GetIngredientsNameList() {
//   let ingredientsNameList=[];
//    ingredients.map(ingredient=>(
//     ingredientsNameList.push(ingredient.name)
//   ));
//   return console.log(ingredientsNameList);
// }
const ingredientsNameList=
[
  "unflavored gelatine","sugar","salt","apple juice","lemon juice","vinegar","carrot","celery","cabbage","green pepper","pimiento"
];

  return (
    <div className='container'>
      <h1>Grandma's recipes</h1>
      <img src={perfectionSaladImg} alt="Perfection Salad" />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.name}>
          <span className='liQuantity'>{ingredient.quantity} </span>
             {ingredient.name}
          </li>))}
      </ul>
      <h2>Preparation</h2>
      <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={ingredientsNameList}
    autoEscape={true}
    textToHighlight="1. In small saucepan, combine gelatine, sugar, and salt; mix well.<br/>

    2. Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat.
    
    3. Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.
    
    4. Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined.
    
    5. Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm.
    
    6. To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve.
    
    Makes 8 servings."
  />
    </div>
  );
}

export default App;
