import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from './news'
import  positionReducer from './details'
import { createWrapper } from 'next-redux-wrapper';

import { useDispatch } from 'react-redux'

export const makeStore = () => 
  configureStore({
    reducer:{
      news: newsReducer,
      position : positionReducer
    }
  });


  export type AppStore = ReturnType<typeof makeStore>;
  export type AppState = ReturnType<AppStore["getState"]>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
  >;
  
  export const wrapper = createWrapper<AppStore>(makeStore);

