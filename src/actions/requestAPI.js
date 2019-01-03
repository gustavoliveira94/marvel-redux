export const REQUEST_API_BEGIN = 'REQUEST_API_BEGIN'
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS'
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE'

export const requestAPIBegin = () => ({
    type: REQUEST_API_BEGIN
})

export const requestAPISuccess = items => ({
    type: REQUEST_API_SUCCESS,
    payload: {
        items
    }
})

export const requestAPIFailure = error => ({
    type: REQUEST_API_FAILURE,
    payload: {
        error
    }
})

export function requestAPI() {
    return dispatch => {
        dispatch(requestAPIBegin())
        return fetch('https://gatewy.marvel.com:443/v1/public/characters?apikey=46ddcc696410797f092cd0b95e6dfc7c')
            .then(res => res.json())
            .then(json => {
                dispatch(requestAPISuccess(json.data.results))
                return json.data.results
            })
            .catch(error => dispatch(requestAPIFailure(error)))
    }
}