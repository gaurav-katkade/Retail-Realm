

const FilterReducer = (state,action) =>{
    console.log("filter reducer -> action  ",action);
    switch(action.type){
        case 'SET_FILTER_PRODUCTS':
            return{
                ...state,
                filterProducts:[...action.payload],
                allProducts:[...action.payload],
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
            let sort_val = document.getElementById('sort');
            let userSelectedSort = sort_val.options[sort_val.selectedIndex].value;
             console.log("filterReducer -> set sort value -> userSelctedSosrt",userSelectedSort);
            return{
                ...state,
                sortingValue:userSelectedSort,
            }
        case 'SORT_FILTER_PRODUCTS':
            const {filterProducts,sortingValue} = state;
            const sortedFilterProducts = [...filterProducts];
            console.log("SORT_FILTER ->SortValue ",sortingValue);
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
            console.log("sorted filter products ",sortedFilterProducts);
            return{
                ...state,
                filterProducts:sortedFilterProducts,
            }

        default:
            return state;
    };
};
export default FilterReducer;