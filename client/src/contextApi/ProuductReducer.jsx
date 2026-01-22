export const initialState = {
    message: "",
    products: [],
    loading: true,
    page: 1,
    pages: 1,
    total: 0,
    error: "",
    keyword: "",
    category: "",
    sort: "",
    debouncedKeyword: "",
    isMobileMenuOpen:false,
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: "" };

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading:false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
                total: action.payload.total,
            };

        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };

        case "SET_PAGE":
            return { ...state, page: action.payload };

        case "SET_MESSAGE":
            return { ...state, message: action.payload };
        case "SET_DEBOUNCED_KEYWORD":
            return {...state,debouncedKeyword:action.payload};

        case "SET_KEYWORD":
            return {...state,keyword:action.payload};

        case "SET_SORT":
            return {...state,sort:action.payload};

    case "SET_CATEGORY":
        return {...state,category:action.payload};

        case "SET_MOBILEOPEN":
            return {...state,isMobileMenuOpen:action.payload}

        default : return state;
        }
};
