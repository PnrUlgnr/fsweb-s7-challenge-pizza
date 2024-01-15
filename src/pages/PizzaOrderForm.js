import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import * as Yup from "yup";
import "../styles/PizzaOrderForm.css";
import SizeAndDough from "../components/SizeAndDough";
import Ingredients from "../components/Ingredients";
import Submit from "../components/Submit";

function PizzaOrderForm(props){
    const pizzaName = "Position Absolute Acılı Pizza";
    const pizzaPrice = 85.50;
    const pizzaDescription = "Pizza detay Pizza detay Pizza detay Pizza detay Pizza detay Pizza detay Pizza detay Pizza detay Pizza detay";
    const pizzaIngredients = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
        "Soğan", "Domates", "Mısır", "Sucuk",
        "Jalepeno", "Sarımsak", "Biber", "Salam",
        "Ananas", "Kabak"
    ];
    const ingredientCost = 5;

    let initArr = [];

    pizzaIngredients.forEach(element => {
        initArr.push(false);
    });
    //u kod, pizzaIngredients adlı bir dizi üzerinde döngü yapar ve her eleman için initArr adlı başka bir diziye false değeri ekler. Bu işlem, pizzaIngredients içindeki her malzeme için initArr dizisine bir false değeri ekleyerek, başlangıçta hiçbir malzemenin seçili olmadığını gösterir. Bu, genellikle form elemanlarının başlangıç durumlarını ayarlamak için kullanılır;

    const initPizza = {
        pizzaName: pizzaName,
        price: pizzaPrice,
        description: pizzaDescription,
        ingredients:[...initArr],
        ingredientCount: 0,
    
        size:"",
        dough:"",
        name:"",
        note:"",
    }
    

    const [isValid, setIsValid] = useState(false);
    const [pizza, setPizza] = useState(initPizza);
    const [errState, setErrState] = useState({
        size:"",
        dough:"",
        ingredients:"",
        name:"",
        note:""
    });

    //Handler Functions
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(isValid){
            axios.post("https://reqres.in/api/orders", pizza)
                .then(r => {
                    console.log(r.data);
                    setPizza(initPizza);
                })
                .catch(e => {
                    console.log(e);
                    alert(e);
                })
        }
    }

    const onInputChange = (e) => {
        let key = e.target.name;

        if(key !== "ingredients"){
            const value = e.target.value;
            
            yupReach(key, value);

            setPizza({...pizza, [key]:value});
        }
        else{
            key = "ingredientCount";
            let index = pizzaIngredients.indexOf(e.target.id);
            let tmpArr = [...pizza.ingredients];
            tmpArr[index] = !tmpArr[index];

            let ingC = tmpArr.reduce((acc, element) => element === true ? acc + 1 : acc + 0, 0);

            yupReach(key,ingC);

            setPizza({...pizza, ingredients: tmpArr, ingredientCount: ingC});
        }
    };



    //Yup
    const formSchema = Yup.object().shape({
        size: Yup
            .string()
            .required("Büyüklük Seç")
            .oneOf(["Küçük", "Orta", "Büyük"]),
        dough: Yup
            .string()
            .required("Hamur Tipi Seç")
            .oneOf(["İnce", "Orta", "Kalın"]),
        ingredientCount: Yup
            .number()
            .min(4, "En az 4 malzeme seç")
            .max(10, "En fazla 10 malzeme seçebilirsin"),
        name: Yup
            .string()
            .required("İsim gir")
            .min(2,"En az 2 karakter"),
        note: Yup
            .string()
    });

    function yupReach(key, value){
        Yup.reach(formSchema, key).validate(value)
            .then(r => {
                setErrState({...errState, [key]: ""});
            })
            .catch(e => {
                setErrState({...errState, [key]: e.message});
            })
    }

    useEffect(() => {
        formSchema.isValid(pizza)
        .then(r => {
            setIsValid(r);
        })
    }, [pizza]); 



    return (
        <div className="order-container" id = "pizza-form">
            <div className = "pizza-info">
                <p>{pizza.pizzaName}</p>
                <h3>{pizza.price} tl</h3>
                <p>{pizza.description}</p>
            </div>
            
            <SizeAndDough onInputChange = {onInputChange} pizza={pizza}/>

            <br/>

            <Ingredients onInputChange={onInputChange} pizzaIngredients={pizzaIngredients} pizza={pizza} ingredientCost={ingredientCost} />

            <br/>
            <br/>
            <br/>

            <label>
                İsim:
                <br/>
                <input type = "text" id="name-input" onChange={onInputChange} name="name" />
            </label>

            <br/>

            <label>
                Sipariş Notu:
                <br/>

                <input type="text" id="special-text" name="note" onChange={onInputChange} />
            </label>

            <hr/>

            <Submit onSubmitHandler={onSubmitHandler} isValid={isValid} pizza={pizza} pizzaPrice={pizzaPrice} />

        </div>
    )
}

export default PizzaOrderForm;