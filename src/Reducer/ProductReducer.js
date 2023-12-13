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
            break;
        case 'SET_SINGLE_DATA':
            console.log("SET_SINGLE_DATA");
            console.log("action.payload in reducer : "+action.payload);
            return{
                ...state,
                singleProduct:action.payload,
                isSingleLoading:false,
                isLoading:false,
                isError:false,
            }
            break;
        case 'SET_SINGLE_ERROR':
            return{
                ...state,
                isSingleLoading:false,
                isError:true,
            }
            break;
        default:
            return state;
    }
}
export default ProductReducer;