export const HIDE_CART = 'HIDE_CART';
export const SHOW_CART = 'SHOW_CART';
export const SAVE_CART = 'SAVE_CART';

export function hideCart() {
  return {
    type: HIDE_CART
  };
}

export function showCart() {
  return {
    type: SHOW_CART
  };
}
export function saveCart(options) {
  return {
    type: SAVE_CART,
    payload: options
  };
}
