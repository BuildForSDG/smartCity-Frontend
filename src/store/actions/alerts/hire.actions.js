export const HIDE_HIRE = 'HIDE_HIRE';
export const SHOW_HIRE = 'SHOW_HIRE';
export const SAVE_VENDOR = 'SAVE_VENDOR';

export function hideHire() {
  return {
    type: HIDE_HIRE
  };
}

export function showHire() {
  return {
    type: SHOW_HIRE
  };
}
export function saveVendor(vendor) {
  return {
    type: SAVE_VENDOR,
    payload: vendor
  };
}
