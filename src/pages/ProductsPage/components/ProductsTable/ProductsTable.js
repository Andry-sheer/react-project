import "./ProductsTable.css";
import { BiSortAlt2 } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import spinner from "../../../../assets/spinner.svg";

const sortIcon = <BiSortAlt2 className="sortIcon" size="20px" />;
const editIcon = <FaEdit className="editIcon" size="20px" />;
const deleteIcon = <MdDelete className="deleteIcon" size="20px" />;

const ProductsTable = ({ isLoading, isError, products }) => {
  if (isError) {
    return (
      <div className="errorContainer">
        <p className="errorText">Oops! sorry we have a problem...</p>
        <p className="errorText">Server: unavailable</p>
      </div>
    );
  } else {
    return ( 
      <div className="ProductContainerMain">
        {isLoading ? (
          <img src={spinner} className="App-logo" alt="spinner" />
        ) : (
          <div className="ProductsTableContainer">
            <div className="productTableTitle">
              <p className="slotName">ID{sortIcon}</p>
              <p className="slotName">Category{sortIcon}</p>
              <p className="slotName">Name{sortIcon}</p>
              <p className="slotName">Quantity{sortIcon}</p>
              <p className="slotName">Price($){sortIcon}</p>
              <p className="slotName"></p> 
            </div>
          </div>
        )}

        {products.map((product) => ( 
          <div className="productTableField" key={product.id}>
            <div className="productTableSelect">
              <div className="productItem">
                <div className="productItem">{product.id}</div>
                <div className="productItem">{product.category}</div>
                <div className="productItem">{product.name}</div>
                <div className="productItem">{product.quantity}</div>
                <div className="productItem">{product.price}</div>
                <div className="buttonContainerProductTable">
                  <button className="buttonEdit">{editIcon}</button>
                  <button className="buttonDelete">{deleteIcon}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ProductsTable;
