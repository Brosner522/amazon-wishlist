import React, { Component } from 'react';
import Item from './Item.js'

class Products extends Component {
  
  
  

  
  render() {
    console.log(this.props.list)
    return (
      <div className="products">
        {/* Display products below */}
        <ul>
        {this.props.list.map(itemObj => <Item displayItem={itemObj} />)}
        </ul>
      </div>
    )
  }

}



export default Products;
