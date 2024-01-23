import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  firebaseOrdersReducer,
  courseDetailsReducer,
  searchReducer,
  userDetailsReducer,
  allCoursesReducer,
} from "./cartSlice";

export const storage = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,

    user: userDetailsReducer,
    firebaseOrders: firebaseOrdersReducer,
    courseDetails: courseDetailsReducer,
    allCourse: allCoursesReducer,
  },
});
