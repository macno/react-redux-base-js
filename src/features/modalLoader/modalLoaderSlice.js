import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: false,
    queue: 0
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
      show: (state, action) => {
        console.log('Show slice');
        state.queue +=1;
        state.active = true;
      },
      hide: (state, action) => {
        console.log('hHide slice');
          if (state.queue > 0)
            state.queue -= 1;
        if (state.queue === 0)
            state.active = false;
      }
    }
});

export const {
    show,
    hide,
} = loaderSlice.actions

export const isLoaderActive = (state) => state.loader.active;

export default loaderSlice.reducer