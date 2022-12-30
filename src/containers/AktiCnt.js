import { connect } from 'react-redux'
import { getPopularNews_request } from '../actions/news.actions'
import Akti from '../components/Akti'

const mapStateToProps = state => ({
    popularNews: state.newsReducer.popularNews

})

const mapDispatchToProps = dispatch => ({
    getPopularNews: () => dispatch(getPopularNews_request())
})

const AktiCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Akti)

export default AktiCnt