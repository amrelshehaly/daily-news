import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from './news'
import { createWrapper } from 'next-redux-wrapper';

import { useDispatch } from 'react-redux'


// export const store = configureStore({
//   reducer: {
//     news: newsReducer
//   },
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// // export type AppDispatch = typeof store.dispatch

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch 

// // export default store

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


export const makeStore = () => 
  configureStore({
    reducer:{
      news: newsReducer
    },
  });

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(newsReducer));
  // }


  export type AppStore = ReturnType<typeof makeStore>;
  export type AppState = ReturnType<AppStore["getState"]>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
  >;
  
  export const wrapper = createWrapper<AppStore>(makeStore);

