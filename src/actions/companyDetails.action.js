import { companyDetailsCostants } from '../constants/companyDetails.constants'

export function getCompanyDetails_request(details) {
    return {
        type: companyDetailsCostants.GETCOMPANTYDETAILS_REQUEST,
        payload: details
    }
}

export function getCompanyDetails_success(details) {
    return {
        type: companyDetailsCostants.GETCOMPANTYDETAILS_SUCCESS,
        payload: details
    }
}

export function getCompanyDetails_failure(error) {
    return {
        type: companyDetailsCostants.GETCOMPANTYDETAILS_FAILURE,
        payload: error
    }
}

export function sendMail_request(email) {
    return {
        type: companyDetailsCostants.SENDMAIL_REQUEST,
        payload: email
    }
}

export function sendMail_success(email) {
    return {
        type: companyDetailsCostants.SENDMAIL_SUCCESS,
        payload: email
    }
}

export function sendMail_failure(error) {
    return {
        type: companyDetailsCostants.SENDMAIL_FAILURE,
        payload: error
    }
}