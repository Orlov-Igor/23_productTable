import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {

render() {
	const { products, onRemoveProduct, onEditProduct } = this.props;
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Category</th>
					<th>Price</th>
					<th>Remnant</th>
					<th>Action</th>
				</tr>
			</thead>
				<tbody>
				{ 
				products.map(product => 
					<ProductRow product={product} key={product.id}
					onRemoveProduct={onRemoveProduct} 
					onEditProduct={onEditProduct}/>
				)
				}
				</tbody> 
		</table>
	)
}
}

export default ProductTable;

