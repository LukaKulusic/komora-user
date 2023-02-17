import { takeEvery, put, call} from 'redux-saga/effects'
import { getCompanyDetails_api, sendEmail_api } from '../api/companyDetails.api';
import { getCompanyDetails_failure, getCompanyDetails_success, sendMail_failure, sendMail_success } from '../actions/companyDetails.action';
import { companyDetailsCostants } from '../constants/companyDetails.constants';

export function* getDetails() {
    const response = yield call(getCompanyDetails_api)
    if(!response || !response.data) {
        return yield put(getCompanyDetails_failure('Internal server error for loading company details'))
    }
    if(response.status === 200){
        return yield put(getCompanyDetails_success(response.data))
    } else {
        return yield put(getCompanyDetails_failure('Error for loading company details'))
    }
}
export function* sendEmail(action) {
    const response = yield call(sendEmail_api, action.payload)
    console.log('action.payload = ', action.payload)
    if(!response || !response.data) {
        return yield put(sendMail_failure('Internal server error for sending email'))
    }
    if(response.status === 200) {
        return yield put(sendMail_success(response.data))
    } else {
        return yield put(sendMail_failure('Error for sending email'))
    }
}

export function* companyDetailsSaga() {
    yield takeEvery(companyDetailsCostants.GETCOMPANTYDETAILS_REQUEST, getDetails)
    yield takeEvery(companyDetailsCostants.SENDMAIL_REQUEST, sendEmail)
}