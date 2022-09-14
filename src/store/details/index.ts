import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";


export interface PositionProps {
    id: number
}

const initialState : PositionProps = {
    id: 0
}

export const positionSlice : any = createSlice({
  name: 'position',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<PositionProps>) => {
        console.log('reducer',action.payload.id)
        return  {id: action.payload.id}
    },
  },
  extraReducers: (builder) => {
    builder.addCase<string, PayloadAction<PositionProps>>(
      HYDRATE,
      (_, action) => {
        return action.payload
      }
    );
  },
})

// Selectors
export const getPosition = (state:PositionProps) => state

// Reducers and actions
export const { setPosition } = positionSlice.actions

export default positionSlice.reducer
