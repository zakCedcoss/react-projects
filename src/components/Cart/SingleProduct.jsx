import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Cart/Cart.module.css";

function SingleProduct() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [params.id]);

  console.log(singleProduct);
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageContainer}>
        <img src={singleProduct?.image} alt={singleProduct?.title} />
      </div>
      <div className={styles.productDetailContainer}>
        <div className={styles.productDetail}>
          <h3>{singleProduct?.title}</h3>
          <p>
            <span>Description: </span>
            {singleProduct?.description}
          </p>
          <p>
            <span>Category: </span>
            {singleProduct?.category}
          </p>
          <p>
            <span>Rating: </span>
            {singleProduct?.rating.rate}
          </p>
        </div>
        <div className={styles.productActionBtns}>
          <button className={styles.decreaseItem}>Go Less - </button>
          <span>0</span>
          <button className={styles.increaseItem}>Go More + </button>
        </div>
        <div className={styles.addToCart}>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
