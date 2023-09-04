import React, { useState } from 'react';
import "./PizzaOrderForm.css";
import axios from 'axios';

function PizzaOrderForm() {
  const [name, setName] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setErrorMessage('İsim en az 2 karakter olmalıdır.');
    } else {
      setErrorMessage('');
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleToppingsChange = (e) => {
    const selectedToppings = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedToppings(selectedToppings);
  };

  const handleSpecialInstructionsChange = (e) => {
    setSpecialInstructions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Axios kullanabilirm 
    

  };

  return (
    <div>
      <h2>Teknolojik Yemekler</h2>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">İsim:</label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={handleNameChange}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}

        <label htmlFor="size-dropdown">Pizza Boyutu:</label>
        <select
          id="size-dropdown"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          <option value="small">Küçük</option>
          <option value="medium">Orta</option>
          <option value="large">Büyük</option>
        </select>

        <label>Malzemeler:</label>
        <select
          multiple
          id="toppings"
          onChange={handleToppingsChange}
        >
          <option value="biber">Biber</option>
          <option value="mantar">Mantar</option>
          <option value="sosis">Sosis</option>
          <option value="zeytin">Zeytin</option>
          <option value="sucuk">Sucuk</option>
          <option value="mısır">Mısır</option>
          <option value="peynir">Peynir</option>
          <option value="ananas">Ananas</option>
          
        </select>

        <label htmlFor="special-text">Sipariş Notu:</label>
<br>
</br>
        <textarea

          id="special-text"
          value={specialInstructions}
          onChange={handleSpecialInstructionsChange}
        ></textarea>

        <button id="order-button" type="submit">
          Sipariş Ver
        </button>
      </form>
    </div>
  );
}

export default PizzaOrderForm;
