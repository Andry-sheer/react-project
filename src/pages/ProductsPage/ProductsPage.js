
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/constants";
import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProductsTable from "../ProductsPage/components/ProductsTable/ProductsTable";
import { useNavigate } from "react-router-dom";
import { addProducts, setIsError } from "../../modules/actions/products";
import { connect } from "react-redux";

const ProductsPage = ( { addProducts, setIsError } ) => {

  const navigatePreview = useNavigate();

  const handleButtonPreview = () => {
    navigatePreview("/preview-page")
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(API_URL + "products");

      if (!response.ok) {
        throw new Error("Something Error");
      }

      const productsData = await response.json();
      addProducts(productsData);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };


  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <Button onClick={handleButtonPreview} type='button' className='two' textButton='Preview' icon={<div className="iconPreview"><CgProfile/></div>} />
      <Button type='button' className='three' textButton='Add Product' icon={<div className="iconAdd"><IoMdAdd/></div>} />
      <h1 className="productTitle">Products</h1>

      <ProductsTable
        isLoading={isLoading}
      />

    </div>
  );
};

export default connect(null, { addProducts, setIsError })(ProductsPage);
