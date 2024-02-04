import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import colorReducer from "./reducers/colorReducer";
import { userApi } from "./services/userApi";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([userApi.middleware]);
  },
});

export default store;
