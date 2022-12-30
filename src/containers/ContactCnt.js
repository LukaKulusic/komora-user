import { connect } from 'react-redux'
import Contact from '../components/Contact'
import { getCompanyDetails_request, sendMail_request } from '../actions/companyDetails.action'

const mapStateToProps = state => ({
    details: state.companyDetailsReducer.details,
    email: state.companyDetailsReducer.email
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getCompanyDetails_request()),
    sendEmail: (email) => dispatch(sendMail_request(email))
})

const ContactCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Contact)

export default ContactCnt