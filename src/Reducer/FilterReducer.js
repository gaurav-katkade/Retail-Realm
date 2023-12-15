

const FilterReducer = (state,action) =>{
    switch(action.type){
        case 'SET_FILTER_PRODUCTS':
            console.log("filter reducer -> ",action);
            return{
                ...state,
                filterProducts:action.payload,
                allProducts:action.payload,
            };

        case 'SET_GRID_VIEW':
            return{
                ...state,
                gridView:true,
            };
        default:
            return state;
    };
};
export default FilterReducer;