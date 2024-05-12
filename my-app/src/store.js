import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userReducer,
  profileReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducer/userReducer";

import {
  servicesReducer,
  serviceDetailsReducer,
  newReviewReducer,
  newServiceReducer,
serviceReducer
} from "./reducer/serviceReducer";

import { newBookingReducer, myBookingsReducer, allBookingsReducer, bookingReducer, bookingDetailsReducer } from "./reducer/bookingReducer";

import { paymentReducer } from "./reducer/paymentReducer";

const reducer = combineReducers({
  user:userReducer,
  profile:profileReducer,
  forgotPassword:forgotPasswordReducer,
  allUsers: allUsersReducer,
  newBooking:newBookingReducer,
  myBooking:myBookingsReducer,
  allBookings:allBookingsReducer,
  booking:bookingReducer,
  serviceBook:paymentReducer,
  bookingDetails:bookingDetailsReducer,
  userDetails: userDetailsReducer,
  services: servicesReducer,
  serviceDetails: serviceDetailsReducer,
  newService: newServiceReducer,
  service:serviceReducer,
  newReview:newReviewReducer
});


let initialState = {
  serviceBook: {
    serviceItems: localStorage.getItem("serviceItems")
      ? JSON.parse(localStorage.getItem("serviceItems"))
      : [],
    bookingInfo: localStorage.getItem("bookingInfo")
      ? JSON.parse(localStorage.getItem("bookingInfo"))
      : {},
  },
};
const middleware = [thunk];

const store = configureStore(
  { reducer },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
