import { connect } from 'react-redux'
import Members from '../components/Members';
import { getCities_request, getMembersPerCity_request, getMembers_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    members: state.memberReducer.members,
    cities: state.memberReducer.cities
})

const mapDispatchToProps = dispatch => ({
    getMembers: () => dispatch(getMembers_request()),
    getMembersPerCity: (city_id) => dispatch(getMembersPerCity_request(city_id)),
    getCities: () => dispatch(getCities_request())
})

const MembersCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Members)

export default MembersCnt