import  { connect } from 'react-redux'
import { getNoveltyDetails_request } from '../actions/news.actions';
import Novelty from '../components/singleComponents/Novelty';

const mapStateToProps = state => ({
    details: state.newsReducer.noveltyDetails
})

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(getNoveltyDetails_request(id))
})

const NoveltyCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Novelty)

export default NoveltyCnt