import {configureStore} from '@reduxjs/toolkit'
import tagReducer from '../reducers/tagSlice'
export default configureStore({
    reducer:{
        tags: tagReducer
    }
})