import { configureStore } from '@reduxjs/toolkit'
import DemoReducer from "./demo-slice"
import UserReducer from "./user"

const store = configureStore({
    reducer: {
        Demo: DemoReducer,
        User: UserReducer,
    },
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


