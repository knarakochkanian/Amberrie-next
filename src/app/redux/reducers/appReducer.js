// redux/reducers/appReducer.js

const initialState = {
    isBlur: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BLUR':
            return { ...state, isBlur: action.payload };
        default:
            return state;
    }
};

export default appReducer;
