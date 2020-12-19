import React, { Component } from 'react';
import './App.css';
import ProductTable from './components/ProductTable'
import ProductForm from './components/ProductForm';


class App extends Component {
  state = {
    products: [
      { name: 'boots', category: 'footwear', price: 300, remnant: 23, id: 1 },
      { name: 'bike', category: 'sport', price: 1200, remnant: 5, id: 2 },
      { name: 'chair', category: 'furniture', price: 750, remnant: 8, id: 3 },
      { name: 'toaster', category: 'kitchen', price: 250, remnant: 12, id: 4 },
    ],
  };

  addProduct = newProduct => {
    this.setState({
      products: [...this.state.products, newProduct]
    })
  };

  removeProduct = id => {
		this.setState({
		  products: this.state.products.filter(product => product.id !== id)
		})
	};

  editProduct = editedProduct => {
    this.setState({
      products: this.state.products.map(product => product.id === editedProduct.id ? editedProduct : product)
    })
  };

  render() {
    const { products } = this.state;
    console.log(products);
    return (
    <div className="App">
      <h1 className="header">Table of products in stock</h1>
      
      <ProductTable products={products}
                    onRemoveProduct={this.removeProduct}
                    onEditProduct={this.editProduct} />
      <ProductForm onSubmitProduct={this.addProduct} />
    </div>
    )
  }
};

export default App;




