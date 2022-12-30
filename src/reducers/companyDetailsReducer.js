import { companyDetailsCostants } from "../constants/companyDetails.constants";

const initialState = {
    details: [],
    email: []
}

export default function companyDetailsReducer(state = initialState, action) {
    switch(action.type) {
        case companyDetailsCostants.GETCOMPANTYDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case companyDetailsCostants.GETCOMPANTYDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload
            }
        case companyDetailsCostants.GETCOMPANTYDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case companyDetailsCostants.SENDMAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case companyDetailsCostants.SENDMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                email: action.payload
            }
        case companyDetailsCostants.SENDMAIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}