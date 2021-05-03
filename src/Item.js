// Want to render each prodcut as an item on the list.
// Create as functional component.



const Item = (props) => {
    return (
        <div>
            {props.displayItem.name}
            {props.displayItem.category}
            {props.displayItem.price}
        </div>
    )
}

export default Item