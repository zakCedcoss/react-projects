import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../Cart/Cart.module.css'
import Navbar from "./Navbar";

function Cart() {

    const [products,setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <Navbar/>
    <div className={styles.imgContainer}>
        {products.map(product => {
            return (
                <div className={styles.imgWrapper} key={product.id}>
                    <Link to={`${product.id}`}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    </Link>
                </div>
            )
        })}
    </div>
        </>
  )
}

export default Cart;
