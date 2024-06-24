import { useSelector, useDispatch } from "react-redux";
function AddToCart({ product }) {
    console.log("add to cart", product.id);
    // useSelector
    let dispatch = useDispatch();
    function increase() {
        //dispatch({type: , payload: })
        dispatch({ type: "ADD_TO_CART", payload: { id: product.id, product } });
    }
    function decrease() {
     //dispatch({type: , payload: })
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id, product } });
    }

    let cart = useSelector((state) => {
        return state.items;
    
    });
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}
export default AddToCart;


// array of object 
// object of object 

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart = 
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);