import { configureStore } from '@reduxjs/toolkit'
import helloReducer from '../features/hello/helloSlice'

export const store = configureStore({
  reducer: {
    hello: helloReducer
  }
})