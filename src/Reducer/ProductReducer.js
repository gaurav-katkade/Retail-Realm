const ProductReducer=(state,action)=>{
    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true,
            };
            break;
        case 'SET_API_DATA':
            const fProduct = action.payload.reduce(
                (total,curElement)=>{
                    total++;
                    return((total<3)&&(curElement.rating.rate >= 4.5));
                }
            )
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:fProduct,
            };
            break;
        case 'API_ERROR':
            return{
                ...state,
                isLoading:false,
                isError:true,
            }

            break;
        default:
            return state;
    }
}
export default ProductReducer;