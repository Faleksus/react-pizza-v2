import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza = () => {
  const [ pizza, setPizza ] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63d007b610982404378ba227.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert("Error: " + error)
        navigate("/");
      }
    }
    fetchPizza();
  }, [setPizza, id, navigate]);

  if (!pizza) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <p>
        {pizza.description}
      </p>
      <h4>{pizza.price} грн</h4>
    </div>
  );
};

export default FullPizza;
