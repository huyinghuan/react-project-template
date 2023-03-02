import { createSlice, Dispatch } from '@reduxjs/toolkit'
//import { resultHandler, API } from "@src/service"

export const demoSlice = createSlice({
    name: 'demo',
    initialState: {
        count: 0
    },
    reducers: {
        addCount: (state, action) => {
            console.log(action.payload)
            state.count = state.count + action.payload
        }
    }
})
const { addCount } = demoSlice.actions;

export { addCount }

export const addCountAsync = (data: { count: number }) => {
    return (dispatch: Dispatch<any>) => {

        setTimeout(() => {
            dispatch(addCount(data.count))
        }, 1000)
    }
}
export default demoSlice.reducer