export const POST_PRODUCT_REVIEW = 'POST_PRODUCT_REVIEW'
export const POST_PRODUCT_REVIEW_SUCCESS = 'POST_PRODUCT_REVIEW_SUCCESS'
export const POST_PRODUCT_REVIEW_ERROR = 'POST_PRODUCT_REVIEW_ERROR'

export const saveReview = (data) => ({
    type: POST_PRODUCT_REVIEW,
    payload: data
})