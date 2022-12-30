import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import ContactCnt from './containers/ContactCnt';
import Header from './components/Header';
import AboutCnt from './containers/AboutCnt';
import BiographyCnt from './containers/BiographyCnt';
import NewsCnt from './containers/NewsCnt';
import NoveltyDetailsCnt from './containers/NoveltyDetailsCnt';
import NewsForCategoryCnt from './containers/NewsForCategoryCnt';
import AdvertismentCnt from './containers/AdvertismentCnt';
import FooterCnt from './containers/FooterCnt';
import MembersCnt from './containers/MembersCnt';
import HomePageCnt from './containers/HomePageCnt';
import AktiCnt from './containers/AktiCnt';
import EmaPlatform from './components/EmaPlatform'
import Election from './components/Election';
import Structure from './components/Structure';
import Pattern from './components/Pattern';
import PublishingActivity from './components/PublishingActivity';
import CongressCnt from './containers/CongressCnt';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePageCnt /> </div>
    },
    {
        path: userPath.about,
        main: () => <div> <AboutCnt /> </div>
    },
    {
        path: userPath.news,
        main: () => <div> <NewsCnt /> </div>
    },
    {
        path: userPath.biography+'/:id',
        main: ({match}) => <div> <BiographyCnt biographyParams={match.params} /> </div>
    },
    {
        path: userPath.category+'/:id',
        main: ({match}) => <div> <NewsForCategoryCnt category={match.params} /> </div>
    },
    {
        path: userPath.noveltyDetails+'/:id',
        main: ({match}) => <div> <NoveltyDetailsCnt novelty={match.params}/> </div>
    },
    {
        path: userPath.advertisment,
        main: () => <div> <AdvertismentCnt /> </div>
    },
    {
        path: userPath.members,
        main: () => <div> <MembersCnt /> </div>
    },
    {
        path: userPath.contact,
        main: () => <div> <ContactCnt /> </div>
    },
    {
        path: userPath.akti,
        main: () => <div> <AktiCnt /> </div>
    },
    {
        path: userPath.emaPlatform,
        main: () => <div> <EmaPlatform /> </div>
    },
    {
        path: userPath.election,
        main: () => <div> <Election /> </div>
    },
    {
        path: userPath.structure,
        main: () => <div> <Structure /> </div>
    },
    {
        path: userPath.pattern,
        main: () => <div> <Pattern /> </div>
    },
    {
        path: userPath.publishingActivity,
        main: () => <div> <PublishingActivity /> </div>
    },
    {
        path: userPath.congress,
        main: () => <div> <CongressCnt /> </div>
    }
]

class PageRouting extends React.Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    {
                        routes.map((route, index) => (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))
                    }
                    <FooterCnt />
                </div>
            </Router>
            
        )
    }
}

export default PageRouting