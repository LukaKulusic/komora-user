import React from 'react'
import { withRouter } from 'react-router-dom'
import ActivityHeader from './singleComponents/ActivityHeader';

class PublishingActivity extends React.Component {

    render() {
        return (
            <div>
                <ActivityHeader />
                <div className="contain-wrapp padding-bot50">	
		            <div className="container">
			            <div className="row">   
                            <div className="col-md-2 col-sm-2 col-lg-2"></div>
                            <div className="col-md-8 col-sm-8 col-lg-8" >
                                    <div className="recent-widget">
                                        <p style={{'fontSize':'18px' , color:'black', paddingBottom: '30px', textAlign: 'center'}}>Izdavačka djelatnost</p>
                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten7.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 7</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten6.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 6</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten5.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 5</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten4.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 4</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten3.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 3</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten2.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 2</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://www.stomkomcg.me/Bilten1.pdf" target="_blank" style={{'fontSize':'15px' , color:'black'}}>Bilten 1</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>

                            </div>

                            <div className="col-md-2 col-sm-2 col-lg-2" ></div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(PublishingActivity)