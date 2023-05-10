import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./cart";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const response = await fetch(
      "https://fakerapi.it/api/v1/products?_quantity=4"
    );
    const data = await response.json();
    dispatch(fetchProductsSuccess(data.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
