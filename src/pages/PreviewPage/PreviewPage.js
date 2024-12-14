import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { API_URL } from "../../constants/constants";
import Logo from "../../assets/pagesLogo.svg";
import CardPreview from "./components/CardPreview/CardPreview";
import MyButton from "../../components/MyButton/MyButton";
import BasicSpinner from "../../components/Spinner/Spinner";
import styles from "../../styles/PreviewPage.module.css";

const PreviewPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error("Something Error");
    }

    const productsData = await response.json();
    setProducts(productsData);
    setIsLoading(false);
  } catch (error) {
    setIsError(true);
    setIsLoading(false);
  }
}

  const handleClickCard = (id) => {
    navigate(`/product-preview/${id}`);
  };

  const handleClickBack = () => {
    navigate("/product-page");
  };

  if (isError){
    return (
      <div className={styles.error}>
        <div className={styles.errorContainer}>
          <img alt="logo2" src={Logo} />
          <p className={styles.title}>Oops! sorry we have a problem...</p>
        </div>
    </div>
    )
  } else {
      return (
    <div className={styles.preview}>
      <div className={styles.container}>
        <MyButton className={styles.buttonBack} type="button" 
          icon={<IoChevronBack size={20} />} 
          textButton={<p className="backButtonProductPageTitle">Product Page</p>} 
          onClick={handleClickBack} 
        />


      {isLoading ? (<div className={styles.spinner}><BasicSpinner/></div>) : (
      <div className={styles.cards}>
        {products.map((product) => (
          <CardPreview
            key={product.id}
            product={product}
            onClick={() => handleClickCard(product.id)}
          />
        ))}
      </div>
      )}
    </div>
    </div>
  );
  }
};

export default PreviewPage;