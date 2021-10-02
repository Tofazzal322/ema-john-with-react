import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [displayProducts, setDisplayProducts] = useState([]);


  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
                setProducts(data);
                setDisplayProducts(data);
            });
  }, []);
    // console.log(products);

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
          exists.quantity += 
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }
    
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
  return (
    <div>
      <div className="search-section">
        <input
                  className="search-box"
                  onChange={handleSearch}
          type="text"
          placeholder="Search Prodcuct's"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
                  {
                     displayProducts.map((product) => (
              <Shop
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}

              ></Shop>
                      ))
                  }
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/orderreview">
              <button className="btn-regular">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

  
export default Home;
