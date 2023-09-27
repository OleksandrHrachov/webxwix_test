"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductCard {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
}

export interface ISlide {
  id: string;
  title: string;
  imgSrc: string;
  initial: boolean;
  genre: string;
}

interface IResponse {
  productData: IProductCard[];
  sliderData: ISlide[];
}

interface IState {
  allProducts: IProductCard[];
  selectedGroup: IProductCard[];
  locale: string;
  productCategories: string[];
  sliderData: ISlide[];
}

export const DEFAULT_PROD_CATEGORY = "All Products";

export const initialState: IState = {
  allProducts: [],
  selectedGroup: [],
  locale: "",
  productCategories: [],
  sliderData: []
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<IResponse>) => {
      state.allProducts = action.payload.productData;
      state.selectedGroup = action.payload.productData;
      state.sliderData = action.payload.sliderData;

      const categories = [DEFAULT_PROD_CATEGORY];
      action.payload.productData.forEach((product) => {
        if (!categories.includes(product.group)) {
          categories.push(product.group);
        }
      });

      state.productCategories = categories;
    },
    selectGroup: (state, action: PayloadAction<string>) => {
      if (action.payload === DEFAULT_PROD_CATEGORY) {
        state.selectedGroup = state.allProducts;
      }

      if (action.payload !== DEFAULT_PROD_CATEGORY) {
        const selectedGroup = state.allProducts.filter(
          (product) => product.group === action.payload
        );
        state.selectedGroup = selectedGroup;
      }
    },
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { setState, selectGroup, setLocale } = productSlice.actions;
export default productSlice.reducer;
