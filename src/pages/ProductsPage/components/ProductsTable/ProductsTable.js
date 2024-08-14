import './ProductsTable.css';
import { Component } from 'react';
import { BiSortAlt2 } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import logo from "../../../../logo.svg";

const sortIcon = <BiSortAlt2 className='sortIcon' size='20px'/>;
const editIcon = <FaEdit className='editIcon' size='20px'/>;
const deleteIcon = <MdDelete className='deleteIcon' size='20px' />

class ProductsTable extends Component {
  
  render(){

    const { isLoading, isError, products } = this.props;

    return ( 

      <div className='ProductContainerMain'>
        <div className='ProductsTableContainer'>
          { isLoading ? (<img src={logo} className="App-logo" alt="spinner" />) : (
                  <div className='productTableTitle'>
                    <p className='slotName'>ID{sortIcon}</p>
                    <p className='slotName'>Category{sortIcon}</p>
                    <p className='slotName'>Name{sortIcon}</p>
                    <p className='slotName'>Quantity{sortIcon}</p>
                    <p className='slotName'>Price($){sortIcon}</p>
                    <p className='slotName'></p>
                  </div> 
                )
              }
        </div>


      { products.map((product) => (
        <div className='productTableField' key={product.id}>
        <div className='productTableSelect'>
          <div className='productItem'> 
            <div className='productItem'>{product.id}</div> <div className='productItem'>{product.category}</div> 
              <div className='productItem' >{product.name}</div>  <div className='productItem' >{product.quantity}</div> 
              <div className='productItem' >{product.price}</div>
                  <div className='buttonContainerProductTable'>
                    <button className='buttonEdit'>{editIcon}</button>
                    <button className='buttonDelete'>{deleteIcon}</button></div>
                  </div>
                </div>
              </div>
            ))}
          {isError && <div className='errorContainer'><p className='errorText'>Oops! sorry we have a problem...</p></div>}
        </div>
      )
    }
  }

export default ProductsTable;