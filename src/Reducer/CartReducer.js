
const cartReducer=(state,action)=>{

    switch (action.type) {
        case 'SET_CART_VALUE':
            console.log("SET CART VALUE -> cartReducer",action.payload);
            const {id,title,price,image,color,amount} = action.payload
            return{
                ...state,
                total_items:state.total_items+1,
                total_amount:state.total_amount+(price*amount),
                cart:[
                    ...state.cart,
                    {
                        id:id+color,
                        title,
                        price,
                        image,
                        color,
                        amount,
                    },
                ]
            }
        case 'REMOVE_ITEM':
            // id = action.payload;
            let cart = state.cart.filter(
                (curEle)=>{
                    return curEle.id!==action.payload;
                }
            )
            
            return{
                ...state,
                total_items:state.total_items-1,
                cart:cart,
            }
        default:
            return state;
    }
}
export default cartReducer;