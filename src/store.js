import { configureStore } from '@reduxjs/toolkit'

import waterReducer from './reducers/waterReducer'

const store = configureStore({
  reducer: {
    waters: waterReducer,
  },
})

export default store
