import FormatPrice from "../Helpers/FormatPrice";


const FilterReducer = (state,action) =>{
    // console.log("filter reducer -> action  ",action);
    switch(action.type){
        case 'SET_FILTER_PRODUCTS':
            let PriceArray = action.payload.map(
                (curEle)=>{
                    return curEle.price;
                }
            )
            let maxPrice = Math.max(...PriceArray);
            // maxPrice = <FormatPrice price={maxPrice}></FormatPrice>;
            return{
                ...state,
                filterProducts:[...action.payload],
                allProducts:[...action.payload],
                filters:{
                    ...state.filters,
                    maxPrice:maxPrice,
                    range:maxPrice,
                }
            };

        case 'SET_GRID_VIEW':
            return{
                ...state,
                gridView:true,
            };
        case 'SET_LIST_VIEW':
            return{
                ...state,
                gridView:false,
            }
        case 'SET_SORT_VALUE':
            // let sort_val = document.getElementById('sort');
            // let userSelectedSort = sort_val.options[sort_val.selectedIndex].value;
            //  console.log("filterReducer -> set sort value -> userSelctedSosrt",userSelectedSort);
            return{
                ...state,
                sortingValue:action.value,
            }
        case 'SORT_FILTER_PRODUCTS':
            const {filterProducts,sortingValue} = state;
            const sortedFilterProducts = [...filterProducts];
            // console.log("SORT_FILTER ->SortValue ",sortingValue);
            switch(sortingValue){
                case 'lowest':
                    sortedFilterProducts.sort(
                        (a,b)=>{
                            return a.price - b.price;
                        }
                    );
                    break;
                case 'highest':
                    sortedFilterProducts.sort(
                        (a,b)=>{
                            return b.price - a.price;
                        }
                    );
                    break;
                case 'a-z':
                    sortedFilterProducts.sort(
                        (a,b)=>{
                            return a.title.localeCompare(b.title);
                        }
                    );
                    break;
                case 'z-a':
                    sortedFilterProducts.sort(
                        (a,b)=>{
                            return b.title.localeCompare(a.title);
                        }
                    );
                    break;
                default:
                    console.log(" unexpected value of sorting value ");
            }
            // console.log("sorted filter products ",sortedFilterProducts);
            return{
                ...state,
                filterProducts:sortedFilterProducts,
            }
        case 'SET_FILTER_VALUE':
            const {name,value} = action.payload;
            console.log("filterReducer->SET_FILTER-VALUE ->   name ",name," value ",value);
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                }
                
            } 
        case 'FILTER_PRODUCTS':
            const {allProducts,filters}  = state;
            let {text,category,range} = state.filters;
            let tempProducts = [...allProducts];
                if(text){
                //wherver the text change
                tempProducts = tempProducts.filter(
                    (curEle)=>{
                        return curEle.title.toLowerCase().includes(text);
                    }
                )
                }
                if(category!=="All"){
                    tempProducts = tempProducts.filter(
                        (curEle)=>{
                            return curEle.category===category;
                        }
                    )
                }
                if(range){
                    tempProducts = tempProducts.filter(
                        (curEle)=>{
                            return range >= curEle.price;
                        }
                    )
                }
                // let maxPrice = tempProducts.reduce(
                //     (initialVal,curEle)=>{
                //         return Math.max(initialVal,curEle.price)
                //     },0
                // )
                return{
                    ...state,
                    filterProducts:tempProducts,
                    // filters:{
                    //     ...state.filters,
                    //     maxPrice:maxPrice,
                            
                    // }
                }
        default:
            return state;
    };
};
export default FilterReducer;