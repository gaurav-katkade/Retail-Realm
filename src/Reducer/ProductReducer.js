const ProductReducer=(state,action)=>{
    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true,
            };
            break;
        case 'SET_API_DATA':
            let total = 0;
            const fProduct = action.payload.filter(
                ()=>{
                    console.log(total);
                    total = total+1;
                    return(total<=3);
                },0
            )
            // here i  was doing mistake written value of function becomes new accumulater 
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProducts:fProduct,
            };
            break;
        case 'API_ERROR':
            return{
                ...state,
                isLoading:false,
                isError:true,
            }

            break;
        case 'SET_SINGLE_LOADING':
            return{
                ...state,
                isSingleLoading:true,
                isError:false
            }
        case 'SET_SINGLE_DATA':
            return{
                ...state,
                singleProduct:action.payload,
                isLoading:false,
                isError:false,
            }
        case 'SET_SINGLE_ERROR':
            return{
                ...state,
                isError:true,
            }
        default:
            return state;
    }
}
export default ProductReducer;