import React from "react";


function Ingredients(props){
    const pizzaIngredients = props.pizzaIngredients;
    const onInputChange = props.onInputChange;
    const pizza = props.pizza;

    const ingredientList = pizzaIngredients.map((ing) => {
        return (
            <label>
                <input 
                type="checkbox" 
                onChange={onInputChange} 
                value={pizzaIngredients.indexOf(ing)} 
                id={ing} name="ingredients" 
                checked = {pizza.ingredients[pizzaIngredients.indexOf(ing)]} />
                {ing}
            </label>
        )
    });


    return (
        <div className="ek-malzemeler">
        <b>Ek Malzemeler</b><br/>
        <p>4 ile 10 arası</p>

        <div className="ingredient-select">
            {ingredientList}
        </div>
    </div>
    );
}

export default Ingredients;