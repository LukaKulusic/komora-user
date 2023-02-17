import React from 'react'
import { withRouter } from 'react-router-dom'
import Typical from 'react-typical'
import { userPath } from '../constants/user.constants'
import congress from '../assets/img/congress.jpg'
import izdavacka from '../assets/img/izdavacka.jpg'
import aktuelnosti from '../assets/img/aktuelnosti111.jpg'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            width: 0,
            path: '',
            height: '',
            fontSize: '28px',
            lastNewDetails: '',
            lastNewContent: '',
            lastId: 0
        }
    }   

    componentDidMount() {
        this.props.getDetails()
        this.getScreenSize()
        // this.props.getLastID()
        // this.getHomePicture()
        this.props.getLastNew()

    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _lastNewDetails = [], _lastNewContent, _lastId
        let _details = []
        if(nextProps.details !== prevProps.details) {
            _details = nextProps.details
            _lastNewDetails = nextProps.lastNewDetails
            if(nextProps.lastNewDetails !== undefined) {
                _lastId = nextProps.lastNewDetails.id
            }
        }
        if(nextProps.lastNewDetails !== prevProps.lastNewDetails) {
            _lastNewDetails = nextProps.lastNewDetails
            _details = nextProps.details
            if(nextProps.lastNewDetails !== undefined) {
                _lastNewDetails = nextProps.lastNewDetails
                _lastNewContent = nextProps.lastNewDetails.content
                _lastId = nextProps.lastNewDetails.id
            }
        }
        return {
            details: _details,
            // lastID: _lastID,
            lastNewDetails: _lastNewDetails,
            lastNewContent: _lastNewContent,
            lastId : _lastId
        }
    }

    getScreenSize = () => {
        let _path, _height, _fontSize
        let width = window.innerWidth
        if(width > 600) {
            _path = "url(../img/home-final.jpg)"
            _height = '660px'
            // _fontSize = '20px'
        } else {
            _path = "url(../img/pg5.png)"
            _height = '420px'
            _fontSize = '20px'
        }
        this.setState({
            width: window.innerWidth,
            path: _path,
            height: _height,
            fontSize: _fontSize
        })
    }

    showNew = () => {
        localStorage.setItem('novelty', this.state.lastId)
        let path = "detaljnije/"+this.state.lastId
        this.props.history.push(path)
    }

    showEmaPage = () => {
        let path = userPath.emaPlatform
        this.props.history.push(path)
    }

    showPatternPage = () => {
        let path = userPath.pattern
        this.props.history.push(path)
    }

    showCongressPage = () => {
        let path = userPath.congress
        this.props.history.push(path)
    }
    showNewsPage = () => {
        let path = userPath.news
        this.props.history.push(path)
    }
    showPublishingActPage = () => {
        let path = userPath.publishingActivity
        this.props.history.push(path)
    }

    render(){
        return(
            <div>
                <div className='container'>
                {/* className='row' style={{marginRight:'-5px'}} */}
                    <div className='row' >
                        {/* <div  style={{marginBottom: "30px", marginTop: "30px"}}> */}
                            <img style={{padding: '5px', maxHeight: '700px'}} className="col-xs-12 col-md-4 img-responsive text-center showPages" src={congress} alt="img1" onClick={this.showCongressPage} title="Kongres"/>
                            <img style={{padding: '5px', maxHeight: '700px'}} className="col-xs-12 col-md-4 img-responsive text-center showPages" src={aktuelnosti} alt="img2" onClick={this.showNewsPage} title="Aktuelnosti"/>
                            <img style={{padding: '5px', maxHeight: '700px'}} className="col-xs-12 col-md-4 img-responsive text-center showPages" src={izdavacka} alt="img3" onClick={this.showPublishingActPage} title="Izdavacka djelatnost"/>
                          {/* </div> */}
                    </div>
                </div>
            
                <div className="cyron" onClick={this.showNew}>
                    <Typical  
                        steps={['Najnovija vijest', 1000, `${this.state.lastNewContent || ""}` , 500]}
                        loop="no"
                        wrapper="p"
                    />
                </div>







                {/* added background */}






                <div className="intro-wrapp paddingtop-clear" style={{background: '#fcfcfc'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="intro-icon-line">
 
                                    <li>
                                        <div className="col-icon absolute-left ">
                                        <i className="fa fa-info fa-2x icon-square fa-default gradientIconStyle rest"></i>
                                        <h5 className="hpParagraph" style={{color: 'darkgray'}}>Naša misija</h5>
                                        <p className="hpParagraph" style={{color: 'darkgray'}}>{this.state.details.goal}</p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left patterns" onClick={this.showPatternPage} >
                                            <i className="fa fa-book fa-2x icon-square fa-default gradientIconStyle" rest></i>
                                            <h5 className="hpParagraph" style={{color: 'darkgray'}}>Naše vrijednosti</h5>
                                            <p className="hpParagraph" style={{color: 'darkgray'}}>{this.state.details.licence}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left ">
                                            <i className="fa fa-home fa-2x icon-square fa-default gradientIconStyle rest"></i>
                                            <h5 className="hpParagraph" style={{color: 'darkgray'}}>Naši resursi</h5>
                                            <p className="hpParagraph" style={{color: 'darkgray'}}>{this.state.details.about}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* content starts */}
                <div className="contain-wrapp padding-bot50">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/clanovi1.png" className="img-responsive" alt="" />
                                    <div className="caption" style={{paddingTop: '0px'}}>
                                        {/* <i className="fa fa-briefcase fa-3x icon-circle fa-default"></i> */}
                                        <h5>
                                            <a href="/clanovi">Članovi komore</a>
                                        </h5>
                                        <p>{this.state.details.titleMembers}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/obrasci1.png" className="img-responsive" alt="" />
                                    <div className="caption" style={{paddingTop: '0px'}}>
                                        {/* <i className="fa fa-headphones fa-3x icon-circle fa-default"></i> */}
                                        {/* <h5>Član komore</h5> */}
                                        <h5>
                                            <a href="/vijesti">Obrasci</a>
                                        </h5>
                                        <p >{this.state.details.titleMember}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/pravni1.png" className="img-responsive" alt="" />
                                    <div className="caption" style={{paddingTop: '0px'}}>
                                        {/* <i className="fa fa-flask fa-3x icon-circle fa-default"></i> */}
                                        {/* <h5>Počasni članovi</h5> */}
                                        <h5>
                                            <a href="/akti">Pravni akti</a>
                                        </h5>
                                        <p style={{'paddingBottom': '24px'}}>{this.state.details.titleMemberH}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)