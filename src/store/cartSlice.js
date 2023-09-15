const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            if(!state.includes(action.payload)){
                state.push(action.payload)
            };
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        addItem(state,action) {
             state.forEach((item)=>{
                if(item.id === action.payload && item.count<10){
                    item.count = item.count+1;
                }
            })
        },
        removeItem(state,action){
             state.forEach((item)=>{
                if(item.id === action.payload && item.count>1){
                    item.count = item.count-1;
                }
            })
        }
    },
});

export const { add, remove, addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
