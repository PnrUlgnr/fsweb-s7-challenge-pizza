import React, { useEffect, useState } from "react";


function Submit(props){
    const minOrderAmount = 1;
    const onSubmitHandler = props.onSubmitHandler;
    const isValid = props.isValid;
    const pizza = props.pizza;
    const pizzaPrice = props.pizzaPrice
    const ingredientCost = props.ingredientCost;
    
    const [orderAmount, setOrderAmount] = useState(minOrderAmount);
    const [price , setPrice] = useState(pizzaPrice);
    const [ingPrice, setIngPrice] = useState(0);
    console.log(price);
    console.log(ingPrice);

    useEffect(() => {
        setIngPrice(pizza.ingredientCount * ingredientCost);
        console.log(ingPrice);
    }, [pizza])

    const onOrderAmountClick = (e) => {
        setOrderAmount(e.target.value === "+" ? orderAmount + 1 : orderAmount - 1 >= minOrderAmount ? orderAmount - 1 : minOrderAmount); 
    }


    return (
        <div className="submit-container flex-container">

            <div>
                <label className="count-label">
                    <button value="-" onClick={onOrderAmountClick}>-</button>
                    <p>{orderAmount}</p>
                    <button value="+" onClick={onOrderAmountClick}>+</button>
                </label>
            </div>
            <div className="order-sum"> 
                <div>
                    <h2>Sipariş Toplamı</h2>
                    <p>Seçimler     {pizza.ingredientCount}</p>
                    <p>Toplam       {price} </p>
                    <label name = "submit" onSubmit={onSubmitHandler}>
                        <button disabled={!isValid}>Sipariş Ver</button>
                    </label>
                </div>                
            </div>

        </div>
    )
}

export default Submit;