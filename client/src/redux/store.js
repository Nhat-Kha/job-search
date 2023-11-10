import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

const store = configureStore({
  reducer: "",
});

const { dispatch } = store;
const useSelector = useAppSelector;
const useDispatch = useAppDispatch();

export { store, dispatch, useDispatch, useSelector };
