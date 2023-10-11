export const initialState = {
    cart: [],
    products: [],
    loading: false,
    error: false
}


export const cartReducer = (state = initialState, action) => {

    switch (action.type) {


        case "GETING_PRODUCTS":
        return{
            ...state,
            loading: true
        }
        
        case "GET_PRODUCTS":

            return{
                ...state,
                loading: false,
                products: action.payload
        }

        case "FAILED_IN_FETCH_PRODUCTS":
            return {
                ...state,
                products: [],
                loading: false, 
                error: true
            }

        case "ADD_TO_CART":

            let itemIndex = state.cart.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1
                state.cart[itemIndex].price = state.cart[itemIndex].quantity * action.payload.price;

                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else if (itemIndex < 0) {
                const temp = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }
            }


       case "REMOVE_FROM_CART":

       

            const Item_Index = state.cart.findIndex(item => item.id === action.payload.id)


            if(Item_Index >= 0){
                    const data = state.cart.filter(item => item.id !== action.payload.id)

                    return {
                        ...state,
                        cart: data
                    }
                }

                else if(Item_Index<0){
                    return{
                        ...state,
                        cart: [...state.cart]
                    }
                }
        case "EMPATY_CART":


            return {
                ...state,
                cart: []
            }


        case "ADD_TO_CART_COUNTED":

        
        let itemIndex_count = state.cart.findIndex(item => item.id === action.payload.data.id)

        if (itemIndex_count >= 0) {
            state.cart[itemIndex_count].quantity = action.payload.count
            state.cart[itemIndex_count].price = action.payload.count * action.payload.data.price
            return {
                ...state,
                cart: [...state.cart]
            }
        } else if (itemIndex_count < 0) {
            const temp = { ...action.payload.data, quantity: action.payload.count, price: action.payload.data.price * action.payload.count }
            return {
                ...state,
                cart: [...state.cart, temp]
            }
        }


        default:
            return state;



    }
}