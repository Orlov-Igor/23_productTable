import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { Button } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';


class ProductRow extends Component {
	state = {
		isEdit: false
	  };
	
	onEditProduct = editedProduct => {
		this.setState({ isEdit: false });
		this.props.onEditProduct(editedProduct);
	};

	render() {
		const { product, onRemoveProduct } = this.props;
        const { isEdit } = this.state;
        if (isEdit) {
			return (
				<tr>
				<StylesProvider injectFirst>
					<td><ProductForm className="product-form" onSubmitProduct={this.onEditProduct} product={product} /></td>
					<td><Button className='btn-cancel' variant='contained' size='small' color='secondary' onClick={() => this.setState({ isEdit: false })}>Cancel</Button></td>
				</StylesProvider>
				</tr>
        )
    }
		return (
			<tr>
				<td>{product.name}</td>
				<td>{product.category}</td>
				<td>{product.price}</td>
				<td>{product.remnant}</td>
				<td>
				<StylesProvider injectFirst>
					<Button className='btn-remove' variant='contained' size='small' color='secondary' onClick={() => onRemoveProduct(product.id)}>
		 				<span className='remove'>Remove</span>
					</Button>
					<Button className='btn-edit' variant='contained' size='small' color='primary' onClick={() => this.setState({ isEdit: true })}>Edit</Button>
				</StylesProvider>
				</td>
			</tr>
		)
	}
}

export default ProductRow;



