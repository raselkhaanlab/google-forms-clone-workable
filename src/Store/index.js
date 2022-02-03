import { configureStore } from "@reduxjs/toolkit";
import authReducer from "store/authentication/authentication.slice";
import formReducer from "store/data/question.slice";

export default configureStore({
  reducer: {
    authentication: authReducer,
    form: formReducer,
  },
});
