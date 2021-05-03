import React, { Component } from 'react'
import Products from './Products';
import Wishlist from './Wishlist';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ]
    }
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <Wishlist />
        <Products list={this.state.products} />
      </div>
    )
  }

}


export default App;
