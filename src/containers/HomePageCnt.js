import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { getDetails_request } from '../actions/homePage.action'
import { getLastNew_request } from '../actions/news.actions'

const mapStateToProps = state => ({
    details: state.homePageReducer.details,
    // lastID: state.newsReducer.lastID,
    lastNewDetails: state.newsReducer.lastNewDetails    
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getDetails_request()),
    getLastNew: () => dispatch(getLastNew_request()),
    // getNewDetails: (id) => dispatch(getNoveltyDetails_request(id))
})

const HomePageCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

export default HomePageCnt