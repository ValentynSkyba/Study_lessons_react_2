import { useEffect, useState } from "react";
import productsData from "../../assets/products.json";
import ProductCard from "./ProductCard";
import s from "./Products.module.css";
import Modal from "../Modal/Modal";
const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCard] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("cart"));
    if (savedData?.length) {
      return savedData;
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleAddToCart = (product) => {
    setCard((prev) => [...prev, product]);
  };

  const handleDeleteFromCard = (id) => {
    setCard((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <header className={s.header}>
        <div>Logo</div>
        <button onClick={toggleModal}>Cart </button>
      </header>

      <ul className={s.list}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ul>

      {isOpen && (
        <Modal closeModal={toggleModal}>
          <h2>CART</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} {item.price}${" "}
                <button onClick={() => handleDeleteFromCard(item.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Products;
