import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";


interface Props {
  source?: {
    id: string
    name: string
  }
  author?: string
  title?: string
  description: string
  url?: string
  urlToImage?: string
  publishedAt?: Date | undefined
  content?: string
}

// author: '',
//   content: '',
//   title: '',
//   description: '',
//   publishedAt: undefined,
//   url: '',
//   urlToImage: '',
//   source: {
//     id: '',
//     name: '',
//   },

// interface NewProps {
//     results: Props[]
// }

// const initialState: NewProps = {
//   results:[]
// }

export const newsSlice = createSlice({
  name: 'news',
  initialState : [] as Props[],
  reducers: {
    AddNews: (state, action: PayloadAction<Props>) => {
        state.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase<string, PayloadAction<Props>>(
      HYDRATE,
      (state, action) => {
        return[...state,action.payload]
      }
    );
  },
})

// Selectors
export const getNews = (state:Props[]) => state

// Reducers and actions
export const { AddNews } = newsSlice.actions

export default newsSlice.reducer
