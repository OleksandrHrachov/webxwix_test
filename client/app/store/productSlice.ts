'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface IProductCard {
  title: string;
  imgSrc: string;
  group: string;
  price: string;
}

interface IState {
  allProducts: IProductCard[];
  selectedGroup: IProductCard[];
  locale: string;
  productCategories: string[];
}

export const DEFAULT_PROD_CATEGORY = 'All Products';

export const initialState: IState = {
  allProducts: [],
  selectedGroup: [],
  locale: '',
  productCategories: []
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
reducers: {
  setState: (state, action: PayloadAction<IProductCard[]>) => {
    state.allProducts = action.payload;
    state.selectedGroup = action.payload;

    const categories = [DEFAULT_PROD_CATEGORY];
    action.payload.forEach(product => {
      if (!categories.includes(product.group)) {
        categories.push(product.group);
      }
    })

    state.productCategories = categories;
  },
  selectGroup: (state, action: PayloadAction<string>) => {
    if (action.payload === DEFAULT_PROD_CATEGORY) {
      state.selectedGroup = state.allProducts;
    }

    if (action.payload !== DEFAULT_PROD_CATEGORY) {
      const selectedGroup = state.allProducts.filter((product) => product.group === action.payload);
      state.selectedGroup =  selectedGroup;
    }
  },
  setLocale: (state, action: PayloadAction<string>) => {
    state.locale = action.payload;
  }
}
});

export const { setState, selectGroup, setLocale } = productSlice.actions;
export default productSlice.reducer;

