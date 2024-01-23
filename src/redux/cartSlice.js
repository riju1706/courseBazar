import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const allCourses = createSlice({
  name: "ALLCOURSES",
  initialState: [],
  reducers: {
    allCourseAction(state, action) {
      return action.payload;
    },
  },
});
const cartSlice = createSlice({
  name: "AddCart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    emptyCartAction(state, action) {
      return [];
    },
    removeOneAction(state, action) {
      return state.filter((i) => {
        return i.id !== action.payload;
      });
    },
  },
});
const searchSlice = createSlice({
  name: "searchAddItem",
  initialState: "",
  reducers: {
    searchAddItem(state, action) {
      return action.payload;
    },
  },
});

const userDetails = createSlice({
  name: "userDetails",
  initialState: {},
  reducers: {
    userDetailsAction(state, action) {
      return action.payload;
    },
  },
});
const firebaseOrders = createSlice({
  name: "firebaseOrders",
  initialState: [],
  reducers: {
    firebaseOrdersAction(state, action) {
      return action.payload;
    },
    emptyFirebaseOrdersAction(state, action) {
      return [];
    },
  },
});
const courseDetails = createSlice({
  name: "courseDetails",
  initialState: [],
  reducers: {
    courseDetailsAction(state, action) {
      return action.payload;
    },
  },
});

export const allCoursesReducer = allCourses.reducer;
export const { allCourseAction } = allCourses.actions;

export default cartSlice.reducer;
export const { addItem, emptyCartAction, removeOneAction } = cartSlice.actions;

export const searchReducer = searchSlice.reducer;
export const { searchAddItem } = searchSlice.actions;

export const userDetailsReducer = userDetails.reducer;
export const { userDetailsAction } = userDetails.actions;

export const firebaseOrdersReducer = firebaseOrders.reducer;
export const { firebaseOrdersAction, emptyFirebaseOrdersAction } =
  firebaseOrders.actions;

export const courseDetailsReducer = courseDetails.reducer;
export const { courseDetailsAction } = courseDetails.actions;
