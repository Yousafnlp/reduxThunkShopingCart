import axios from "axios";


export const getData = ()=>async(dispatch)=>{

    try {

        // The dispatch argument in your thunk function, is a function that allows you to dispatch actions to the Redux store.
        dispatch({type: "GETING_PRODUCTS"})

        let {data} = await axios.get(`http://localhost:6001/get_Products`);
        dispatch({type: "GET_PRODUCTS", payload: data})

    } catch (error) {

        dispatch({type: "FAILED_IN_FETCH_PRODUCTS"})
        
    }
}







export const addToCart =(data)=>{

    return{
        type: "ADD_TO_CART",
        payload: data
       
    }
}



export const removeFromCart =(data)=>{

    return{
        type: "REMOVE_FROM_CART",
        payload: data
    }
}



export const emptyCart =()=>{

    return{
        type: "EMPATY_CART"
    }
}


export const addToCart_Detailed =(data, count)=>{

    return{
        type: "ADD_TO_CART_COUNTED",
        payload: {
            data: data,
            count: count
        }
    }
}