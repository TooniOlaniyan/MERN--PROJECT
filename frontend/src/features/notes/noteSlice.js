import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import noteService from './noteService'

const initialState = {
    notes: [],
    isError: false,
    isLoading: false,
    message: ''

}
//gET TICKET NOTES
export const getNotes = createAsyncThunk(
    'notes/getAll',
    async (ticketId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await noteService.getNotes( ticketId , token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
  
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        reset: (state) => initialState

    },
    extraReducers: (builder) =>{
      
    }
})

export default noteSlice.reducer
export const {reset} = noteSlice.actions