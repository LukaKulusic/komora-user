import React from 'react'
import { withRouter } from 'react-router-dom'
import Typical from 'react-typical'
import { userPath } from '../constants/user.constants'
import img1 from '../assets/img/img01.jpg'
import img2 from '../assets/img/img02.jpg'
import img3 from '../assets/img/img03.jpg'

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
                {/* slider starts */}


            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                    {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src={img2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src={img3} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>*/}
                    </div> 

                        {/* <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                        <img src={img1} alt="..." />
                        <div className="carousel-caption">
                            ...
                        </div>
                        </div>
                        <div className="item">
                        <img src={img2} alt="..." />
                        <div className="carousel-caption">
                            ...
                        </div>
                        </div>
                        ...
                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div> */}

                    <div className="row" style={{marginBottom: "30px", marginTop: "30px"}}>
                        <img className="col-xs-12 col-md-4 img-responsive text-center showPages" src={img1} alt="img1" onClick={this.showCongressPage} />
                        <img className="col-xs-12 col-md-4 img-responsive text-center showPages" src={img2} alt="img2" onClick={this.showNewsPage} />
                        <img className="col-xs-12 col-md-4 img-responsive text-center showPages" src={img3} alt="img3" onClick={this.showPublishingActPage} />
                    </div>




                    <div class="container">
                        <div class="carousel slide multi-item-carousel" id="theCarousel">
                            <div class="carousel-inner row w-100 mx-auto">
                            <div class="carousel-item active col-md-4">
                                <img src="https://via.placeholder.com/300/f44336/000000?text=1" class="img-fluid mx-auto d-block" />
                            </div>
                            <div class="carousel-item col-md-4">
                                <img src="https://via.placeholder.com/300/e91e63/000000?text=2" class="img-fluid mx-auto d-block" />
                            </div>
                            <div class="carousel-item col-md-4">
                                <img src="https://via.placeholder.com/300/9c27b0/000000?text=3" class="img-fluid mx-auto d-block" />
                            </div>
                            <div class="carousel-item col-md-4">
                                <img src="https://via.placeholder.com/300/673ab7/000000?text=4" class="img-fluid mx-auto d-block" />
                            </div>
                            <div class="carousel-item col-md-4">
                                <img src="https://via.placeholder.com/300/4caf50/000000?text=5" class="img-fluid mx-auto d-block" />
                            </div>
                            </div>
                            <a class="carousel-control-prev" href="#theCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#theCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>





                </div>
            </div>
            
            





                {/* <div id="slider-wrapper"> */} 
                    {/* <div id="layerslider" style={{'width':'100%','height':`${this.state.height}`, 'backgroundImage':`${this.state.path}`}}>
                        {/* <div className="ls-slide" data-ls="slidedelay:8000;transition2d:1,2,3,4;"> */}
                            {/* <img src="img/slide-bg04.jpg" className="ls-bg" alt="Slide background" /> */}
                           {/* <div className="ls-layer">
                                <img src="img/imac.png" className="ls-l"
                                    style={{'top':'240px','left':'50%'}}
                                    data-ls="offsetxin:0;
                                    offsetyin:top;
                                    durationin:1000;
                                    delayin:500;
                                    easingin:easeOutBack;
                                    easingout:easeOutQuart;
                                    offsetyout:top;
                                    offsetxout:0;
                                    durationout:1000;" alt="" />
                            </div>
                             <img src="img/macbook.png" className="ls-l"
                                style={{'top':'345px','left':'34%'}}
                                data-ls="offsetxin:left;
                                offsetyin:0;
                                durationin:1000;
                                delayin:1500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:0;
                                offsetxout:left;
                                durationout:1000;" alt="" />
                            <img src="img/ipad.png" className="ls-l"
                                style={{'top':'340px','left':'62%'}}
                                data-ls="offsetxin:right;
                                offsetyin:0;
                                durationin:1000;
                                delayin:2500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:0;
                                offsetxout:right;
                                durationout:1000;" alt="" />
                            <img src="img/iphone.png" className="ls-l"
                                style={{'top':'410px','left':'67%'}}
                                data-ls="offsetxin:right;
                                offsetyin:0;
                                durationin:1000;
                                delayin:3500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:0;
                                offsetxout:right;
                                durationout:1000;" alt="" /> */}
                            {/* <h2 className="ls-l headline3"
                                style={{'top':'110px','left':'50%', 'fontSize':`${this.state.fontSize}`}}
                                data-ls="offsetxin:0;
                                durationin:3500;
                                delayin:1500;
                                easingin:easeOutElastic;
                                rotatexin:90;
                                transformoriginin:50% top 0;
                                offsetxout:0;
                                durationout:1000;
                                rotatexout:90;
                                transformoriginout:50% bottom 0;">
                                Stomatološka komora Crne Gore
                            </h2> */}




                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
                {/* slider ends */}
                <div className="cyron" onClick={this.showNew}>
                    <Typical  
                        steps={['Najnovija vijest', 1000, `${this.state.lastNewContent || ""}` , 500]}
                        loop="no"
                        wrapper="p"
                    />
                </div>
                {/* <div className="cyron">
                     <p onClick={this.showEmaPage}>Implementacija Ema Chamber Platform-e za potrebe Stomatološke komore Crne Gore</p>           
                </div> */}


                <div className="intro-wrapp paddingtop-clear">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="intro-icon-line">
 
                                    <li>
                                        <div className="col-icon absolute-left ">
                                        <i className="fa fa-info fa-2x icon-square fa-default gradientIconStyle rest"></i>
                                        <h5 className="hpParagraph">Naša misija</h5>
                                        <p className="hpParagraph">{this.state.details.goal}</p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left patterns" onClick={this.showPatternPage} >
                                            <i className="fa fa-book fa-2x icon-square fa-default gradientIconStyle" rest></i>
                                            <h5 className="hpParagraph">Naše vrijednosti</h5>
                                            <p className="hpParagraph">{this.state.details.licence}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left ">
                                            <i className="fa fa-home fa-2x icon-square fa-default gradientIconStyle rest"></i>
                                            <h5 className="hpParagraph">Naši resursi</h5>
                                            <p className="hpParagraph">{this.state.details.about}</p>
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
                        {/* <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="title-head centered">
                                    <p>{this.state.details.titleh1}</p>
                                </div>
                            </div>
                        </div> */}
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
                {/* content ends */}

                {/* <div className="clearfix"></div> */}

                {/*start member of... */}
                {/* <div className="cta-wrapp cta-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h5>Zahtjev za izdavanje/obnavljanje licence za rad za doktore stomatologije (prilog)</h5>
                            </div>
                            <div className="col-md-3">
                                <a className="btn btn-default btn-icon btn-block downloadDoc" href="http://www.stomkomcg.me/Zahtjev za izdavanje licence.pdf" onClick={this.getDoc}>Preuzmi <i className="fa fa-send"></i></a>
                            </div>
                        </div>
                    </div>
                </div>                 */}
                {/* end member of */}

            </div>
        )
    }
}

export default withRouter(HomePage)