import './App.css';
import perfectionSaladImg from './images/perfection_salad.jpg';


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
  console.log(ingredients)
  
  return (
    <div className='container'>
        <h1>Grandma's recipes</h1>
        <img src={perfectionSaladImg} alt="Perfection Salad" />
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(ingredient =>(<li>{ingredient.quantity} {ingredient.name}</li>))}
        </ul>
    </div>
  );
}

export default App;
