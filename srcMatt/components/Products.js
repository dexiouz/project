import React,{Component} from 'react';
export default class Products extends Component{
    render(){
        const {product} = this.props;
        console.log(product)
        const products = product.map(prod => {
            return (
                <div>
                    <p> {prod._id} {prod.name}</p>
                </div>
            )
        })
        return (
            <div>
                <h2> Single product page.</h2>
                {products}
            </div>
        )
    }
}