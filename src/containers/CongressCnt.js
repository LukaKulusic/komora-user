import { connect } from 'react-redux'
import { addParticipans_failure, addParticipans_request } from '../actions/congress.action'
import Congress from '../components/Congress'

const mapStateToProps = state => ({
    addParticipansMsg: state.memberReducer.addParticipansMsg
})

const mapDispatchToProps = dispatch => ({
    addParticipans: (details) => dispatch(addParticipans_request(details))
})

const CongressCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Congress)

export default CongressCnt