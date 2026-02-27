import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHello = createAsyncThunk(
  'hello/fetchHello',
  async () => {
    const response = await fetch('http://137.131.143.246:8080/hello')
    return response.text()
  }
)

const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    message: '',
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHello.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchHello.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.message = action.payload
      })
      .addCase(fetchHello.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default helloSlice.reducer