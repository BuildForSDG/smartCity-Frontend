export const HIDE_HIRE = 'HIDE_HIRE';
export const SHOW_HIRE = 'SHOW_HIRE';
export const SAVE_HIRE = 'SAVE_HIRE';

export function hideHire() {
    return {
        type: HIDE_HIRE
    }
}

export const showHire = () => ({ type: SHOW_HIRE })

export function saveHire(options) {
    return {
        type: SAVE_HIRE,
        payload: options
    };
};
