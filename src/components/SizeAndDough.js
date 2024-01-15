import React from "react";
import Select from "react-select";


function SizeAndDough(props){
    let boyutText = "Boyut Seç";
    let hamurText = "Hamur Seç";
    const options = [
        {target:{value: "İnce", name:"dough"}, label:"İnce"},
        {target:{value: "Orta", name:"dough"}, label:"Orta"}, 
        {target:{value: "Kalın", name:"dough"}, label:"Kalın"}
    ];
    const pizza = props.pizza;
    const onInputChange = props.onInputChange;

    return (
        <div className = "flex-container"> 
            <label  id = "size-radio" className = "label">
                <b>{boyutText}</b> <br/>
                <input 
                    type = "radio"
                    value = "Küçük"
                    onChange = {onInputChange}
                    checked = {pizza.size === "Küçük"}
                    id = "küçük-boyut"
                    name = "size"
                />
                Küçük
                <br/>
                <input 
                    type = "radio"
                    value = "Orta"
                    onChange = {onInputChange}
                    checked = {pizza.size === "Orta"}
                    id = "orta-boyut"
                    name = "size"
                />
                Orta
                <br/>
                <input 
                    type = "radio"
                    value = "Büyük"
                    onChange = {onInputChange}
                    checked = {pizza.size === "Büyük"}
                    id = "büyük-boyut"
                    name = "size"
                />
                Büyük
                <br/>
            </label>

            <label id = "dough-select" className = "label">
                <b>{hamurText}</b><br />
                <Select options={options} onChange={onInputChange} isSearchable = {false} />
            </label>
        </div>
    )
}

export default SizeAndDough;