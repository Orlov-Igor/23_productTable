import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class ProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  newProductName: props.product?.name,
		  newProductCategory: props.product?.category,
		  newProductPrice: props.product?.price,
		  newProductRemnant: props.product?.remnant,
		}
	  }

	onChangeName = e => {
		this.setState({
			newProductName: e.target.value
		})
	};

	onChangeCategory = e => {
		this.setState({
			newProductCategory: e.target.value
		})
	};

	onChangePrice = e => {
		this.setState({
			newProductPrice: +e.target.value
		})
	};

	onChangeRemnant = e => {
		this.setState({
			newProductRemnant: +e.target.value
		})
	};

	resetForm = () => {
	 this.setState({
		newProductName: '',
		newProductCategory: '',
		newProductPrice: '',
		newProductRemnant: ''
	})
	};

	submitProduct = () => {
		const { product } = this.props;
		const { newProductName: name, newProductCategory: category, newProductPrice: price, newProductRemnant: remnant } = this.state;
		const newProduct = { name, category, price, remnant, id: product ? product.id : Date.now() };
		if (!newProduct.name || !newProduct.category|| !newProduct.price|| !newProduct.remnant) return alert('All fields are required!');
		if (newProduct.name.length < 2) return alert('Product name must contain at least 2 characters!');
		if (newProduct.category.length < 2) return alert('Category name must contain at least 2 characters!');
		if (newProduct.price < 1) return alert('Price can not be less than 1$!');
		if (newProduct.remnant < 0) return alert('Incorrect remnant number!');
		this.props.onSubmitProduct(newProduct);
		this.resetForm();
	  };
	
	render() {
		const { newProductName, newProductCategory, newProductPrice, newProductRemnant } = this.state
		return (
			<div className='product-form'>
				<StylesProvider injectFirst>
					<TextField className='input' variant="outlined" value={newProductName} onChange={this.onChangeName} placeholder='Name' name='name' type='text' required></TextField>
					<TextField className='input' variant="outlined" value={newProductCategory} onChange={this.onChangeCategory} placeholder='Category' name='category' type='text' required></TextField>
					<TextField className='input' variant="outlined" value={newProductPrice} onChange={this.onChangePrice} placeholder='Price' name='price' type='number' min='1' required></TextField>
					<TextField className='input' variant="outlined" value={newProductRemnant} onChange={this.onChangeRemnant} placeholder='Remnant' name='remnant' type='number' min='0' required></TextField>
					<Button className='btn-submit'variant='contained' size='small' color='primary'onClick={this.submitProduct}>Add item</Button>
				</StylesProvider>
				
			</div>
		)
	}
} 

export default ProductForm;



