
import { Component } from 'react';
import { API_URL } from '../constants';
import './App.css';

// import Login from './Login/Login';
// import ProductsPage from './ProductsPage/ProductsPage';
import ProductPreview from './ProductPreview/ProductPreview';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      isLoading: true, 
      isError: false,
    }
  }

  componentDidMount(){
    setTimeout(()=> ( this.getProducts()), 2000) 
  }
  
  async getProducts() {
    try {
      const response = await fetch( API_URL + 'products' );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    
    const productsData = await response.json();
    this.setState({ products: productsData, })
    this.setState({ isLoading: false });
  }

  catch (error) {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }
}

  render() {
    const { isLoading, isError, products } = this.state;

    return (
    <div className="App">
      {/* <Login /> */}
      {/* <ProductsPage products={products} isLoading={isLoading} isError={isError} /> */}
      <ProductPreview />
    </div>
    )

  }
}

export default App;
